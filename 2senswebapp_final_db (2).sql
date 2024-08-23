-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 19 août 2024 à 14:12
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `2senswebapp_final_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `abonnement`
--

DROP TABLE IF EXISTS `abonnement`;
CREATE TABLE IF NOT EXISTS `abonnement` (
  `ID_ABONNEMENT` int NOT NULL AUTO_INCREMENT,
  `ID_USER` smallint NOT NULL,
  `NBQUESTION` int DEFAULT NULL,
  `LIBELLE` char(100) DEFAULT NULL,
  PRIMARY KEY (`ID_ABONNEMENT`),
  KEY `FK_ABONNEMENT_UTILISATEUR` (`ID_USER`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `ID_USER` int NOT NULL AUTO_INCREMENT,
  `PHOTO` char(32) DEFAULT NULL,
  `USERNAME` varchar(50) DEFAULT NULL,
  `EMAIL` char(32) DEFAULT NULL,
  `PASSWORD` text,
  `TELEPHONE` char(32) DEFAULT NULL,
  `ROLE` char(32) DEFAULT NULL,
  PRIMARY KEY (`ID_USER`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `appartenir`
--

DROP TABLE IF EXISTS `appartenir`;
CREATE TABLE IF NOT EXISTS `appartenir` (
  `ID_INFORMATION` int NOT NULL AUTO_INCREMENT,
  `ID_CATHEGORIE` smallint NOT NULL,
  PRIMARY KEY (`ID_INFORMATION`,`ID_CATHEGORIE`),
  KEY `FK_APPARTENIR_CATHEGORIE_INFO` (`ID_CATHEGORIE`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `categorie_consultant`
--

DROP TABLE IF EXISTS `categorie_consultant`;
CREATE TABLE IF NOT EXISTS `categorie_consultant` (
  `ID_CATEGORIE` int NOT NULL AUTO_INCREMENT,
  `NOM` char(50) DEFAULT NULL,
  PRIMARY KEY (`ID_CATEGORIE`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `consultant`
--

DROP TABLE IF EXISTS `consultant`;
CREATE TABLE IF NOT EXISTS `consultant` (
  `ID_USER_UTILISATEUR` int NOT NULL AUTO_INCREMENT,
  `ID_CATEGORIE` int NOT NULL,
  `ID_USER` smallint NOT NULL,
  `PROFESSION` char(32) DEFAULT NULL,
  `STATUT` char(32) DEFAULT NULL,
  `PHOTO` char(32) DEFAULT NULL,
  `USERNAME` char(32) DEFAULT NULL,
  `EMAIL` char(32) DEFAULT NULL,
  `PASSWORD` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `TELEPHONE` char(32) DEFAULT NULL,
  `ROLE` char(32) DEFAULT NULL,
  PRIMARY KEY (`ID_USER_UTILISATEUR`),
  KEY `FK_CONSULTANT_CATEGORIE_CONSULTANT` (`ID_CATEGORIE`),
  KEY `FK_CONSULTANT_ADMIN` (`ID_USER`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `consultant`
--

INSERT INTO `consultant` (`ID_USER_UTILISATEUR`, `ID_CATEGORIE`, `ID_USER`, `PROFESSION`, `STATUT`, `PHOTO`, `USERNAME`, `EMAIL`, `PASSWORD`, `TELEPHONE`, `ROLE`) VALUES
(1, 1, 1, 'directeur generale', 'marier', 'dimi.jpg', NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `images`
--

DROP TABLE IF EXISTS `images`;
CREATE TABLE IF NOT EXISTS `images` (
  `ID_IMAGE` int NOT NULL AUTO_INCREMENT,
  `ID_QUESTION` smallint NOT NULL,
  `NOM_IMAGE` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ID_IMAGE`),
  KEY `FK_IMAGES_QUESTIONS` (`ID_QUESTION`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `images`
--

INSERT INTO `images` (`ID_IMAGE`, `ID_QUESTION`, `NOM_IMAGE`) VALUES
(1, 1, 'acte.png'),
(2, 1, 'cni.png');

-- --------------------------------------------------------

--
-- Structure de la table `newsletter`
--

DROP TABLE IF EXISTS `newsletter`;
CREATE TABLE IF NOT EXISTS `newsletter` (
  `ID_INTERNAUTE` int NOT NULL AUTO_INCREMENT,
  `EMAIL` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID_INTERNAUTE`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `newsletter`
--

INSERT INTO `newsletter` (`ID_INTERNAUTE`, `EMAIL`, `created_at`) VALUES
(1, 'dimidev@gmail.com', '2024-08-10 09:29:03'),
(2, 'dimitribonsou6@gmail.com', '2024-08-10 09:29:03'),
(3, 'dimitribonsou6@gmail.com', '2024-08-10 09:29:03'),
(4, 'dimitribonsou@gmail.com', '2024-08-10 09:29:03'),
(5, 'dimitribonsou@gmail.com', '2024-08-10 09:29:03'),
(6, 'dimitribonsou@gmail.com', '2024-08-10 09:29:03'),
(7, 'dimitribonsou@gmail.com', '2024-08-10 09:29:03'),
(8, 'dimidev@gmail.com', '2024-08-10 09:29:03'),
(9, 'dimitribonsou@gmail.com', '2024-08-10 09:29:03'),
(10, 'dimitribonsou26@gmail.com', '2024-08-10 09:29:03'),
(11, 'email@gmail.com', '2024-08-10 09:29:03'),
(12, 'email2@gmail.com', '2024-08-10 09:32:42'),
(13, 'dimi@gmail.com', '2024-08-10 09:37:05'),
(14, 'element@gmail.com', '2024-08-10 09:38:09'),
(15, 'dimidev46@gmail.com', '2024-08-10 09:50:57');

-- --------------------------------------------------------

--
-- Structure de la table `paiement`
--

DROP TABLE IF EXISTS `paiement`;
CREATE TABLE IF NOT EXISTS `paiement` (
  `ID_PAIEMENT` smallint NOT NULL AUTO_INCREMENT,
  `ID_QUESTION` smallint NOT NULL,
  `MONTANT` decimal(13,2) DEFAULT NULL,
  `DATE_PAIEMENT` date DEFAULT NULL,
  `HEURE` time DEFAULT NULL,
  `OPERATEUR` char(32) DEFAULT NULL,
  `ABONNEMENT` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`ID_PAIEMENT`),
  KEY `FK_PAIEMENT_QUESTIONS` (`ID_QUESTION`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `questions`
--

DROP TABLE IF EXISTS `questions`;
CREATE TABLE IF NOT EXISTS `questions` (
  `ID_QUESTION` int NOT NULL AUTO_INCREMENT,
  `ID_USER` smallint NOT NULL,
  `TITRE` char(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `DESCRIPTION` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `DATE_ENVOIE` datetime DEFAULT CURRENT_TIMESTAMP,
  `STATUT` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`ID_QUESTION`),
  KEY `FK_QUESTIONS_UTILISATEUR` (`ID_USER`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `questions`
--

INSERT INTO `questions` (`ID_QUESTION`, `ID_USER`, `TITRE`, `DESCRIPTION`, `DATE_ENVOIE`, `STATUT`) VALUES
(1, 1, 'comment devenir développeur en 2024', 'j\'aimerais savoir les sites web ,plateformes et technologie que je devrais maitriser pour débuter dans le développement web en 2024', '2024-08-10 13:57:41', 0),
(2, 4, 'comment faire pour changer d\'acte au cameroun', 'j\'ai un enfant qui a été enregistrer par sa mère a mon insu et j\'aimerais lancer la procédure pour changer son acte de naissance et inscrire mon nom sur l\'acte', '2024-08-12 21:03:09', 0),
(3, 1, 'comment faire pour devenir gouverneur au cameroun', 'j\'aimerais savoir le cursus de formation , le nombre d\'année et  une estimation des couts pour tout le cursus scolaires', '2024-08-17 10:40:09', 0),
(4, 1, 'comment faire pour développer le pays', 'quelle les choses à changer pour développer le Cameroun en 2024 a fin d\'atteindre l\'emergence 2035 en bonnes et éduque forme', '2024-08-19 01:16:46', 0),
(5, 6, 'comment obenir un permis A', 'j\'aimerais avoir les étapes nécessaires pour nécessaire à l\'obtention du permis A au cameroun', '2024-08-19 01:43:05', 0);

-- --------------------------------------------------------

--
-- Structure de la table `recompense`
--

DROP TABLE IF EXISTS `recompense`;
CREATE TABLE IF NOT EXISTS `recompense` (
  `ID_RECOMPENSE` int NOT NULL AUTO_INCREMENT,
  `ID_USER_UTILISATEUR` smallint NOT NULL,
  `DATE_HEURE` datetime DEFAULT CURRENT_TIMESTAMP,
  `MONTANT` decimal(13,2) DEFAULT NULL,
  `OPERATEUR` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'mtnmomo',
  PRIMARY KEY (`ID_RECOMPENSE`),
  KEY `FK_RECOMPENSE_CONSULTANT` (`ID_USER_UTILISATEUR`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `reponses`
--

DROP TABLE IF EXISTS `reponses`;
CREATE TABLE IF NOT EXISTS `reponses` (
  `ID_REPONSE` int NOT NULL AUTO_INCREMENT,
  `ID_QUESTION` smallint NOT NULL,
  `ID_USER_UTILISATEUR` smallint NOT NULL,
  `MESSAGE` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `STATUT_REPONSE` tinyint(1) DEFAULT NULL,
  `NUMERO` int DEFAULT NULL,
  `DATE_HEURE` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID_REPONSE`),
  KEY `FK_REPONSES_CONSULTANT` (`ID_USER_UTILISATEUR`),
  KEY `FK_REPONSES_QUESTIONS` (`ID_QUESTION`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `reponses`
--

INSERT INTO `reponses` (`ID_REPONSE`, `ID_QUESTION`, `ID_USER_UTILISATEUR`, `MESSAGE`, `STATUT_REPONSE`, `NUMERO`, `DATE_HEURE`) VALUES
(1, 1, 1, 'pour devenir développeur en 2024 il faudrait apprendre les concepts de base en algorithme et langage c et ensuite apprendre le html5 et css3 qui sont des technologie de base a maitriser pour tout développeur . ', NULL, 1, '2024-08-17 12:46:38'),
(3, 4, 1, 'pour développer le Cameroun il faut goudronner les routes ,baisser les prix des produits alimentaires nettoyer les roues', NULL, 1, '2024-08-19 01:19:10'),
(7, 5, 4, 'pour obtenir le permis de conduit A en 1semaine au Cameroun il faudrait s\'inscrire  à la meilleur auto-école au Cameroun auto-école Sawa', NULL, 1, '2024-08-19 02:24:43'),
(8, 5, 4, 'pour avoir le permis A il faudrait avoir une bonne maitrise en soit et suivre la formation dans une école de qualité à fin de progressé rapidement ', NULL, 1, '2024-08-19 02:28:10'),
(6, 5, 1, 'pour obtenir une bonne formation a fin d\'obtenir le permis a au Cameroun il faut aller suivre sa formation dans une auto-école agréé et professionnel ', NULL, 1, '2024-08-19 01:46:01');

-- --------------------------------------------------------

--
-- Structure de la table `signalement`
--

DROP TABLE IF EXISTS `signalement`;
CREATE TABLE IF NOT EXISTS `signalement` (
  `ID_SIGNAL` int NOT NULL AUTO_INCREMENT,
  `ID_QUESTION` smallint NOT NULL,
  `LIBELLE` varchar(100) DEFAULT NULL,
  `DESCRIPTION` text,
  `DATE_SIGNALEMENT` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID_SIGNAL`),
  KEY `FK_SIGNALEMENT_QUESTIONS` (`ID_QUESTION`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `signalement`
--

INSERT INTO `signalement` (`ID_SIGNAL`, `ID_QUESTION`, `LIBELLE`, `DESCRIPTION`, `DATE_SIGNALEMENT`) VALUES
(1, 2, 'action illegale ', 'cette action pourrais dans certains cas entrain des fausse identité ou des fraude sur les âge des citoyens camerounais', '2024-08-17 16:15:32'),
(2, 1, 'question hors contexte', 'cette question ne concerne pas les services publics', '2024-08-17 16:38:58');

-- --------------------------------------------------------

--
-- Structure de la table `sugestions`
--

DROP TABLE IF EXISTS `sugestions`;
CREATE TABLE IF NOT EXISTS `sugestions` (
  `ID_SUGESTION` int NOT NULL AUTO_INCREMENT,
  `NOM` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `EMAIL` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `MESSAGE` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID_SUGESTION`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `sugestions`
--

INSERT INTO `sugestions` (`ID_SUGESTION`, `NOM`, `EMAIL`, `MESSAGE`, `created_at`) VALUES
(1, 'bonsou', 'bonsou@gmail.com', 'j\'aime le design de votre applic', '0000-00-00 00:00:00'),
(2, 'dimidev', 'dimipro@gmail.com', 'je suis très content de votre idée et votre travail la solution est vraiment a apprécier', '2024-08-10 09:55:03');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `ID_USER` int NOT NULL AUTO_INCREMENT,
  `USERNAME` varchar(50) DEFAULT NULL,
  `EMAIL` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `PASSWORD` text,
  `TELEPHONE` char(32) DEFAULT NULL,
  `ROLE` char(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'user',
  PRIMARY KEY (`ID_USER`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`ID_USER`, `USERNAME`, `EMAIL`, `PASSWORD`, `TELEPHONE`, `ROLE`) VALUES
(4, 'kengni', 'kengni@gmail.com', '$2b$10$jsiFeS.OMLzJRM/3yNP1cuGH4N8QO9sGVHgUqHtY1FMLQhvr/DzXS', '678545623', 'user'),
(1, 'bonsou', 'bonsou@gmail.com', '$2b$10$7rKCUDHXOEHLlU5Ic8JEJu6.zfp67SHAI71uNrBrFSKa8x8JXQLv2', '674606328', 'user'),
(6, 'ceverines', 'ceverines@gmail.com', '$2b$10$DZKbLG.LJVZB47x/E92wmuExzBPOIrcEbuUaxjB5qv9baUmid3xZS', '674632589', 'user');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
