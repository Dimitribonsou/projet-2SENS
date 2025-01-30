// Importer busboy avec la syntaxe ES6
import Busboy from 'busboy';
// Créer un objet pour stocker les données partagées
const sharedData = {
    studentName: ''
};
// Middleware pour intercepter et extraire le nom de l'étudiant avant que multer ne traite les fichiers
const captureStudentName = (req, res, next) => {
    // Initialise une nouvelle instance de busboy pour parser les données multipart/form-data
        const busboy = Busboy({ headers: req.headers });
    
    // Écoute l'événement 'field' pour les champs de formulaire non-fichiers
    busboy.on('field', (fieldname, value) => {
        // Vérifie si le champ est celui qui contient le nom
        if (fieldname === 'nom') {
            sharedData.studentName = value;
            console.log('Nom capturé:', sharedData.studentName);
        }
    });
    // Écoute les erreurs potentielles pendant le parsing
    busboy.on('error', (error) => {
        console.error('Erreur lors du parsing:', error);
        res.status(500).json({ message: "Erreur lors du parsing des données" });
    });

    // Écoute l'événement 'finish' émis quand le parsing est terminé
    busboy.on('finish', () => {
        // Vérifie si le nom a été capturé
        if (!sharedData.studentName) {
            console.warn('Attention: Aucun nom n\'a été capturé');
        }
        // Continue vers le prochain middleware
        next();
    });

    // Connecte le flux de données de la requête vers busboy
    req.pipe(busboy);
};
export {
    captureStudentName,
    sharedData
};