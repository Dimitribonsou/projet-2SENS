import  express  from 'express';
import ImageController from './../Controllers/ImageController.js';
const  router = express.Router();
import  upload from './../middlewares/StockageDocument.js';
import  {captureStudentName} from './../middlewares/captureStudentName.js';

// Modifier la route pour utiliser le middleware de capture du nom
router.post('/upload', 
    captureStudentName, // Capturer le nom avant l'upload
    upload.fields([
        { name: 'document1', maxCount: 1 },
        { name: 'document2', maxCount: 1 }
    ]), 
    ImageController.NewImage
);

// route pour effectuer le telechargement des fichier
router.get('/download/:filename', ImageController.DownloadImage);

export default router;