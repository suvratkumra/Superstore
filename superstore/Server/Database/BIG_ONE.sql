-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: superstore_database
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `category_details`
--

DROP TABLE IF EXISTS `category_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cName` varchar(45) NOT NULL,
  `D_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `id_idx` (`D_id`),
  CONSTRAINT `id` FOREIGN KEY (`D_id`) REFERENCES `department_details` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_details`
--

LOCK TABLES `category_details` WRITE;
/*!40000 ALTER TABLE `category_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `category_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_cart`
--

DROP TABLE IF EXISTS `customer_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_cart` (
  `customer_id` int NOT NULL,
  `product_id` int NOT NULL,
  `product_price` float NOT NULL,
  PRIMARY KEY (`customer_id`),
  UNIQUE KEY `customer_id_UNIQUE` (`customer_id`),
  KEY `product_id_idx` (`product_id`),
  CONSTRAINT `customer_id` FOREIGN KEY (`customer_id`) REFERENCES `login_details` (`id`),
  CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `product_details` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_cart`
--

LOCK TABLES `customer_cart` WRITE;
/*!40000 ALTER TABLE `customer_cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `department_details`
--

DROP TABLE IF EXISTS `department_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `department_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dName` char(40) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department_details`
--

LOCK TABLES `department_details` WRITE;
/*!40000 ALTER TABLE `department_details` DISABLE KEYS */;
INSERT INTO `department_details` VALUES (1,'Cosmetics'),(2,'Bakery'),(3,'Produce'),(4,'Meat/Seafood'),(5,'Dairy/Eggs'),(6,'Equipment'),(7,'Medical'),(8,'Toys'),(9,'Frozen'),(10,'Kids Clothes'),(11,'Men Clothes'),(12,'Household'),(13,'Snacks_Candy'),(14,'Women Clothes');
/*!40000 ALTER TABLE `department_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login_details`
--

DROP TABLE IF EXISTS `login_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Username` char(50) NOT NULL,
  `Email_Id` varchar(100) NOT NULL,
  `Password` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `Email_Id_UNIQUE` (`Email_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=117 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_details`
--

LOCK TABLES `login_details` WRITE;
/*!40000 ALTER TABLE `login_details` DISABLE KEYS */;
INSERT INTO `login_details` VALUES (114,'suvrat','suvratkumra2018@gmail.com','12'),(115,'shreyap1','shreyajs000@gmail.com','Cutie'),(116,'vardhini.pawar','vardhini.pawar@ucalgary.ca','Sudhini');
/*!40000 ALTER TABLE `login_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_details`
--

DROP TABLE IF EXISTS `product_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `company_name` varchar(45) NOT NULL,
  `PName` varchar(45) NOT NULL,
  `price` float NOT NULL,
  `dept_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `dept_name_idx` (`dept_id`),
  CONSTRAINT `dept_id` FOREIGN KEY (`dept_id`) REFERENCES `department_details` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_details`
--

LOCK TABLES `product_details` WRITE;
/*!40000 ALTER TABLE `product_details` DISABLE KEYS */;
INSERT INTO `product_details` VALUES (1,'Country Harvest','14 Grain Whole Wheat Bread',3.21,2),(2,'Farmer\'s Market','Banana Chocolate Muffin',4.99,2),(3,'Farmer\'s Market','Banana Loaf Cake',4.49,2),(4,'Farmer\'s Market','Butter Croissant',3.49,2),(5,'President\'s Choice','Chocolate Mini Muffin',3.99,2),(6,'Farmer\'s Market','Chocolate Chip Muffin',4.99,2),(7,'Country Harvest','Cinnamon Raisin Bread',2.99,2),(8,'Farmer\'s Market','Double Chocolate Muffin',4.99,2),(9,'Superstore','French Bread',0.99,2),(10,'Casa Mendosa','Large Original Tortillas',5.99,2),(11,'President\'s Choice','Tortillas Original',4.99,2),(12,'Superstore','Rolls 6 Pack',2.49,2),(13,'Superstore','Sourdough Loaf Sliced',1.49,2),(14,'Country Harvest','Stone Milled With Roasted Wheat',2.99,2),(15,'Suraj','Naan Original',3.99,2),(16,'Superstore','Coconut',3.99,3),(17,'Great Value','Cranberries',3.99,3),(18,'Superstore','Dill',2.99,3),(19,'Superstore','Fresh Mint',1.99,3),(20,'Superstore','Garlic',2.59,3),(21,'Great Value','Fruit Salad With Cherries',5.99,3),(22,'Superstore','Kale Sweet Salad',4.99,3),(23,'Your Fresh Market','Lemon',5.99,3),(24,'Superstore','Lettuce Butter',4.49,3),(25,'Superstore','Mango Red',1.49,3),(26,'President\'s Choice','Organic Brown Bell Pepper',1.49,3),(27,'President\'s Choice ','Organic Cauliflower 6 Pack',3.99,3),(28,'Superstore','Parsnip',1.49,3),(29,'Your Fresh Market','Potatoes Yellow',5.99,3),(30,'Presiden\'t Choice','Raspberries Original',3.99,3),(31,'Superstore','Chicken Breast ClubPack',23.99,4),(32,'Superstore','Chicken Leg ClubPack',18.99,4),(33,'Superstore','Chicken Thigh ClubPack',16.99,4),(34,'Superstore','Extra Lean Ground Beef',12.99,4),(35,'Schneiders','Juicy Jumbo All Beef Wieners',11.99,4),(36,'Superstore','Lean Ground Beef 456g',7.99,4),(37,'No Name','Mild Sugar Cured Bacon',3.99,4),(38,'President\'s Choice','Minced Turkey',6.99,4),(39,'Maple Leaf','Natural Top Dogs',8.99,4),(40,'No Name','Hot Dogs',5.99,4),(41,'President\'s Choice','Boneless Chicken Breast',10.99,4),(42,'President\'s Choice','Mild Italian Pork (6-Pack)',9.99,4),(43,'Superstore','Pork Tendalion (2-Pack)',21.99,4),(44,'Schneiders','Classic Cut Bacon',5.99,4),(45,'Smokehouse','Bacon Original',6.99,4);
/*!40000 ALTER TABLE `product_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'superstore_database'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-05 19:09:33
