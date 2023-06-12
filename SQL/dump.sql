-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: portal_eventos
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `convidado`
--

DROP TABLE IF EXISTS `convidado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `convidado` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(80) NOT NULL,
  `email` varchar(120) NOT NULL,
  `cargo` varchar(80) NOT NULL,
  `telefone` varchar(18) NOT NULL,
  `id_empresa` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_convidado_empresa` (`id_empresa`),
  CONSTRAINT `fk_convidado_empresa` FOREIGN KEY (`id_empresa`) REFERENCES `empresa` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `convidado`
--

LOCK TABLES `convidado` WRITE;
/*!40000 ALTER TABLE `convidado` DISABLE KEYS */;
INSERT INTO `convidado` VALUES (1,'Jeremias','jere@gmail.com','Assistente','99999-8888',1);
/*!40000 ALTER TABLE `convidado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empresa`
--

DROP TABLE IF EXISTS `empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empresa` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` VALUES (1,'Loja de Cavalos Adultos'),(2,'Vendedor de Trem de Pouso Usado');
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `espaco`
--

DROP TABLE IF EXISTS `espaco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `espaco` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(80) NOT NULL,
  `ponto_referencia` varchar(120) DEFAULT NULL,
  `descricao` varchar(400) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `espaco`
--

LOCK TABLES `espaco` WRITE;
/*!40000 ALTER TABLE `espaco` DISABLE KEYS */;
INSERT INTO `espaco` VALUES (1,'Casa do Kleber','Perto da Casa do Kleber','O Kleber mora lá'),(2,'Rio pequeno do Oeste','Dentro da Agua','Tem Agua lá'),(3,'Sitio do Masqueico Prego','No meio da Mata','Aqui tem de tudo, tem Masqueico, tem Sitio, tem Prego e Tem Martelo. Tem até uma duzia de panqueca de calabresa.'),(4,'Casa ADDDDDD Kleber','Perto da Casa do Kleber','O Kleber mora lá');
/*!40000 ALTER TABLE `espaco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evento_agenda`
--

DROP TABLE IF EXISTS `evento_agenda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evento_agenda` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(80) NOT NULL,
  `descricao` varchar(1000) NOT NULL,
  `data_inicio` date NOT NULL,
  `data_termino` date NOT NULL,
  `hora_inicio` time NOT NULL,
  `hora_termino` time NOT NULL,
  `endereco` varchar(120) NOT NULL,
  `id_usuario` int NOT NULL,
  `id_lugar` int NOT NULL,
  `id_tipo` int NOT NULL,
  `id_instituicao` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_evento_agenda_lugar` (`id_lugar`),
  KEY `fk_evento_agenda_tipo` (`id_tipo`),
  KEY `fk_evento_agenda_usuario_code` (`id_usuario`),
  KEY `fk_evento_agenda_instituicao` (`id_instituicao`),
  CONSTRAINT `fk_evento_agenda_instituicao` FOREIGN KEY (`id_instituicao`) REFERENCES `instituicao` (`id`),
  CONSTRAINT `fk_evento_agenda_lugar` FOREIGN KEY (`id_lugar`) REFERENCES `lugar` (`id`),
  CONSTRAINT `fk_evento_agenda_tipo` FOREIGN KEY (`id_tipo`) REFERENCES `tipo` (`id`),
  CONSTRAINT `fk_evento_agenda_usuario_code` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evento_agenda`
--

LOCK TABLES `evento_agenda` WRITE;
/*!40000 ALTER TABLE `evento_agenda` DISABLE KEYS */;
/*!40000 ALTER TABLE `evento_agenda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evento_convidado`
--

DROP TABLE IF EXISTS `evento_convidado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evento_convidado` (
  `id_presenca` int NOT NULL,
  `id_convidado` int NOT NULL,
  `condicao` varchar(20) DEFAULT NULL,
  `anunciado` tinyint(1) DEFAULT NULL,
  `presenca` tinyint(1) DEFAULT NULL,
  KEY `fk_evento_convidado_evento_presenca` (`id_presenca`),
  KEY `fk_evento_convidado_convidado` (`id_convidado`),
  CONSTRAINT `fk_evento_convidado_convidado` FOREIGN KEY (`id_convidado`) REFERENCES `convidado` (`id`),
  CONSTRAINT `fk_evento_convidado_evento_presenca` FOREIGN KEY (`id_presenca`) REFERENCES `evento_presenca` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evento_convidado`
--

LOCK TABLES `evento_convidado` WRITE;
/*!40000 ALTER TABLE `evento_convidado` DISABLE KEYS */;
INSERT INTO `evento_convidado` VALUES (2,1,'Confimado',1,1);
/*!40000 ALTER TABLE `evento_convidado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evento_presenca`
--

DROP TABLE IF EXISTS `evento_presenca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evento_presenca` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(80) NOT NULL,
  `data_hora` datetime NOT NULL,
  `descricao` varchar(1000) NOT NULL,
  `id_usuario` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_evento_presenca_usuario` (`id_usuario`),
  CONSTRAINT `fk_evento_presenca_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evento_presenca`
--

LOCK TABLES `evento_presenca` WRITE;
/*!40000 ALTER TABLE `evento_presenca` DISABLE KEYS */;
INSERT INTO `evento_presenca` VALUES (2,'Evento Legal','2022-05-05 00:00:00','É um evento legal',5);
/*!40000 ALTER TABLE `evento_presenca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagem`
--

DROP TABLE IF EXISTS `imagem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagem` (
  `id` int NOT NULL AUTO_INCREMENT,
  `link` varchar(2000) NOT NULL,
  `nome` varchar(80) NOT NULL,
  `tipo` varchar(45) NOT NULL,
  `id_agenda` int NOT NULL,
  `id_instituicao` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_imagem_evento_agenda` (`id_agenda`),
  KEY `fk_imagem_instituicao` (`id_instituicao`),
  CONSTRAINT `fk_imagem_evento_agenda` FOREIGN KEY (`id_agenda`) REFERENCES `evento_agenda` (`id`),
  CONSTRAINT `fk_imagem_instituicao` FOREIGN KEY (`id_instituicao`) REFERENCES `instituicao` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagem`
--

LOCK TABLES `imagem` WRITE;
/*!40000 ALTER TABLE `imagem` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `instituicao`
--

DROP TABLE IF EXISTS `instituicao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `instituicao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `instituicao`
--

LOCK TABLES `instituicao` WRITE;
/*!40000 ALTER TABLE `instituicao` DISABLE KEYS */;
INSERT INTO `instituicao` VALUES (1,'Fundacao');
/*!40000 ALTER TABLE `instituicao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lugar`
--

DROP TABLE IF EXISTS `lugar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lugar` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lugar`
--

LOCK TABLES `lugar` WRITE;
/*!40000 ALTER TABLE `lugar` DISABLE KEYS */;
INSERT INTO `lugar` VALUES (1,'Jacinto da Casa'),(2,'Castelo do Alek');
/*!40000 ALTER TABLE `lugar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `solicitacao`
--

DROP TABLE IF EXISTS `solicitacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `solicitacao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status_solicitacao` tinyint(1) NOT NULL,
  `data_solicitacao` datetime NOT NULL,
  `quantidade` int NOT NULL,
  `data_inicio` date NOT NULL,
  `data_termino` date NOT NULL,
  `hora_inicio` time NOT NULL,
  `hora_termino` time NOT NULL,
  `descricao` varchar(1000) DEFAULT NULL,
  `id_espaco` int NOT NULL,
  `id_usuario` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_solicitacao_usuario` (`id_usuario`),
  KEY `fk_solicitacao_espaco` (`id_espaco`),
  CONSTRAINT `fk_solicitacao_espaco` FOREIGN KEY (`id_espaco`) REFERENCES `espaco` (`id`),
  CONSTRAINT `fk_solicitacao_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `solicitacao`
--

LOCK TABLES `solicitacao` WRITE;
/*!40000 ALTER TABLE `solicitacao` DISABLE KEYS */;
INSERT INTO `solicitacao` VALUES (3,1,'2023-05-05 00:00:00',50,'2030-01-04','2030-01-05','10:00:00','11:00:00','É um evento ai',1,6),(4,0,'2023-05-05 00:00:00',50,'2030-01-04','2030-01-05','10:00:00','11:00:00','É um evento ai 2 denovo',1,6),(5,1,'2022-12-31 00:00:00',20,'2002-04-03','2023-01-01','16:00:00','17:00:00','descrebasssss',1,6),(6,1,'2022-12-31 00:00:00',20,'2023-12-07','2023-07-03','15:00:00','20:00:00','É um belo de um evento',1,6),(7,1,'2022-12-31 00:00:00',20,'1220-02-09','2023-07-03','20:00:00','22:00:00','Vamo nadar!!!',2,6),(8,1,'2022-12-31 00:00:00',20,'1220-02-09','2023-07-03','20:00:00','22:00:00','Vamo nadar!!!',2,6),(9,1,'2022-12-31 00:00:00',20,'1220-02-09','2023-07-03','20:00:00','22:00:00','Vamo nadar!!!',1,6),(10,1,'2022-12-31 00:00:00',20,'1220-02-09','2023-07-03','20:00:00','22:00:00','Vamo nadar!!!',1,6),(11,1,'2022-12-31 00:00:00',20,'1220-02-09','2023-07-03','20:00:00','22:00:00','Vamo nadar!!!',1,6),(12,1,'2022-12-31 00:00:00',20,'1220-02-09','2023-07-03','20:00:00','22:00:00','Vamo nadar!!!',1,6),(13,1,'2022-12-31 00:00:00',20,'1220-02-13','2023-07-03','11:00:00','22:00:00','Vamo nadar!!!asd',2,6),(14,1,'2022-12-31 00:00:00',20,'2023-06-14','2023-07-03','12:12:00','12:31:00','asdasdasd',1,6),(15,1,'2022-12-31 00:00:00',20,'3123-12-21','2023-07-03','12:03:00','12:03:00','123',1,6),(16,1,'2022-12-31 00:00:00',20,'1231-03-12','2023-07-03','12:12:00','12:12:00','adsasdasd',2,6),(17,1,'2022-12-31 00:00:00',20,'5345-03-04','2023-07-03','03:45:00','03:45:00','534534534',1,6),(18,1,'2022-12-31 00:00:00',20,'2024-04-04','2023-07-03','00:00:00','23:59:00','Esse evento vai ser o mais brabissimo de todos, vamo nos reunir tudo no sitio do Masqueico Prego pra comer umas panquecas das boas enquanto esperamos a confraternização dos Masqueico as 4:00 da manhã!',3,6),(19,0,'2023-05-05 00:00:00',50,'2020-02-02','2021-02-20','10:00:00','11:00:00','É um evento ai 2 denovo',1,6),(20,1,'2022-12-31 00:00:00',20,'0232-03-31','2023-07-03','23:32:00','23:32:00','23232',2,8),(21,0,'2023-05-05 00:00:00',50,'2020-02-02','2021-02-20','10:00:00','11:00:00','É um evento ai 2 denovo',1,6),(22,0,'2023-05-05 00:00:00',50,'2020-02-02','2021-02-20','10:00:00','11:00:00','É um evento ai 2 denovo',1,6),(23,0,'2023-05-05 00:00:00',50,'2020-02-02','2021-02-20','10:00:00','11:00:00','É um evento ai 2 denovo',1,6),(24,0,'2023-05-05 00:00:00',50,'2020-02-02','2021-02-20','10:00:00','11:00:00','É um evento ai 2 denovo',1,6),(25,0,'2023-05-05 00:00:00',50,'2020-02-02','2021-02-20','10:00:00','11:00:00','É um evento ai 2 denaaaaaaaaaovo',1,6),(26,1,'2022-12-31 00:00:00',20,'4444-04-04','2023-07-03','04:44:00','04:44:00','Funciona por favor meu mano',4,8);
/*!40000 ALTER TABLE `solicitacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo`
--

DROP TABLE IF EXISTS `tipo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo`
--

LOCK TABLES `tipo` WRITE;
/*!40000 ALTER TABLE `tipo` DISABLE KEYS */;
INSERT INTO `tipo` VALUES (1,'Convencao');
/*!40000 ALTER TABLE `tipo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(80) NOT NULL,
  `email` varchar(120) NOT NULL,
  `senha` varchar(80) NOT NULL,
  `cargo` varchar(80) NOT NULL,
  `telefone` varchar(18) NOT NULL,
  `nivel_acesso` varchar(20) DEFAULT NULL,
  `status_usuario` tinyint DEFAULT NULL,
  `id_instituicao` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_unique_email` (`email`),
  KEY `fk_instituicao_usuario` (`id_instituicao`),
  CONSTRAINT `fk_instituicao_usuario` FOREIGN KEY (`id_instituicao`) REFERENCES `instituicao` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (5,'teste','teste','$2b$08$apFKE.u8WBmZItC9CLl5Nen/p6HW9D5DY58UgYFW4N3e7KWmvaOYm','teste','teste','Solicitante',1,1),(6,'Jacinto Machado','jmachado@gmail.com','$2b$08$I9PbQUa.QJWWjrDP4DVW/Ol1ObZx.IpN421abB9jvp4U8yhCooInq','Analista','12345-54321','Solicitante',1,1),(7,'Glaubas Santana','glaubas.santana@gmail.com','$2b$08$HvpeXpCWEb.Xi.2WUIMonO0wNLU8jDI2LG9whyhDGFosrdUMMdUfa','Gerente Geral','(14) 99443-1133','Administrador',1,1),(8,'Ulices Robervas','ulices.robervas@gmail.com','$2b$08$miIhCkdjPHEzhoj492MmVeaZLW6J0BjICM9KjAgx8Mmfsjs9yiSzK','Solicitante','(14) 99298-9955','Solicitante',1,1);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-12 13:09:32
