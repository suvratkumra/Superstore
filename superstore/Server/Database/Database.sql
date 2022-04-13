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
-- Table structure for table `cart_details`
--

DROP TABLE IF EXISTS `cart_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_details` (
  `email` varchar(100) NOT NULL,
  `added_products` varchar(45) NOT NULL,
  `price` double NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`email`,`added_products`,`quantity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_details`
--

LOCK TABLES `cart_details` WRITE;
/*!40000 ALTER TABLE `cart_details` DISABLE KEYS */;
INSERT INTO `cart_details` VALUES ('1','Brocolli Florets (500g)',1.4,1),('1','Dill',1.4,6),('1','Oreo Mini Snack Pack',1.4,1);
/*!40000 ALTER TABLE `cart_details` ENABLE KEYS */;
UNLOCK TABLES;

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
INSERT INTO `department_details` VALUES (1,'WomenClothes'),(2,'Bakery'),(3,'Produce'),(4,'Meat/Seafood'),(5,'Dairy/Eggs'),(6,'Cosmetics'),(7,'Equipment'),(8,'Frozen'),(9,'Household'),(10,'Kids Clothes'),(11,'Medical'),(12,'MenClothes'),(13,'Snacks'),(14,'Toys');
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
  `Hint_Question` text NOT NULL,
  `Hint_Answer` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `Email_Id_UNIQUE` (`Email_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=138 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_details`
--

LOCK TABLES `login_details` WRITE;
/*!40000 ALTER TABLE `login_details` DISABLE KEYS */;
INSERT INTO `login_details` VALUES (1,'sdf','suvratkumra2018@gmail.com','12','safa','214'),(134,'suvrat','suvrat.kumra@ucalgary.ca','su','who is your best friend?','me'),(136,'shreyajs000@gmail.com','shreyajs000@gmail.com','123','What was the first car you bought?','None');
/*!40000 ALTER TABLE `login_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manager_details`
--

DROP TABLE IF EXISTS `manager_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manager_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Email_Id` varchar(50) NOT NULL,
  `Password` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manager_details`
--

LOCK TABLES `manager_details` WRITE;
/*!40000 ALTER TABLE `manager_details` DISABLE KEYS */;
INSERT INTO `manager_details` VALUES (1,'suvratkumra2018@gmail.com','123'),(2,'shreya.patel1@ucalgary.ca','123');
/*!40000 ALTER TABLE `manager_details` ENABLE KEYS */;
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
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `dept_name_idx` (`dept_id`),
  CONSTRAINT `dept_id` FOREIGN KEY (`dept_id`) REFERENCES `department_details` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=183 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_details`
--

LOCK TABLES `product_details` WRITE;
/*!40000 ALTER TABLE `product_details` DISABLE KEYS */;
INSERT INTO `product_details` VALUES (1,'Country Harvest','14 Grain Whole Wheat Bread',3.21,2,3),(2,'Farmer\'s Market','Banana Chocolate Muffin',4.99,2,5),(3,'Farmer\'s Market','Banana Loaf Cake',4.49,2,7),(4,'Farmer\'s Market','Butter Croissant',3.49,2,8),(5,'President\'s Choice','Chocolate Mini Muffin',3.99,2,2),(6,'Farmer\'s Market','Chocolate Chip Muffin',4.99,2,1),(7,'Country Harvest','Cinnamon Raisin Bread',2.99,2,4),(8,'Farmer\'s Market','Double Chocolate Muffin',4.99,2,6),(9,'Superstore','French Bread',0.99,2,8),(10,'Casa Mendosa','Large Original Tortillas',5.99,2,2),(11,'President\'s Choice','Tortillas Original',4.99,2,3),(12,'Superstore','Rolls 6 Pack',2.49,2,9),(13,'Superstore','Sourdough Loaf Sliced',1.49,2,8),(14,'Country Harvest','Stone Milled With Roasted Wheat',2.99,2,7),(15,'Suraj','Naan Original',3.99,2,5),(16,'Superstore','Coconut',3.99,3,2),(17,'Great Value','Cranberries',3.99,3,3),(18,'Superstore','Dill',2.99,3,5),(19,'Superstore','Fresh Mint',1.99,3,6),(20,'Superstore','Garlic',2.59,3,1),(21,'Great Value','Fruit Salad With Cherries',5.99,3,6),(22,'Superstore','Kale Sweet Salad',4.99,3,7),(23,'Your Fresh Market','Lemon',5.99,3,8),(24,'Superstore','Lettuce Butter',4.49,3,1),(25,'Superstore','Mango Red',1.49,3,3),(26,'President\'s Choice','Organic Brown Bell Pepper',1.49,3,4),(27,'President\'s Choice ','Organic Cauliflower 6 Pack',3.99,3,5),(28,'Superstore','Parsnip',1.49,3,5),(29,'Your Fresh Market','Potatoes Yellow',5.99,3,6),(30,'Presiden\'t Choice','Raspberries Original',3.99,3,7),(31,'Superstore','Chicken Breast ClubPack',23.99,4,8),(32,'Superstore','Chicken Leg ClubPack',18.99,4,9),(33,'Superstore','Chicken Thigh ClubPack',16.99,4,2),(34,'Superstore','Extra Lean Ground Beef',12.99,4,3),(35,'Schneiders','Juicy Jumbo All Beef Wieners',11.99,4,5),(36,'Superstore','Lean Ground Beef 456g',7.99,4,1),(37,'No Name','Mild Sugar Cured Bacon',3.99,4,6),(38,'President\'s Choice','Minced Turkey',6.99,4,7),(39,'Maple Leaf','Natural Top Dogs',8.99,4,4),(40,'No Name','Hot Dogs',5.99,4,1),(41,'President\'s Choice','Boneless Chicken Breast',10.99,4,3),(42,'President\'s Choice','Mild Italian Pork (6-Pack)',9.99,4,7),(43,'Superstore','Pork Tendalion (2-Pack)',21.99,4,6),(44,'Schneiders','Classic Cut Bacon',5.99,4,8),(45,'Smokehouse','Bacon Original',6.99,4,9),(46,'Astro','Balkan Style Yogurt (750g)',4.99,5,5),(47,'Beatrice','1% milk (4L/1G)',4.99,5,6),(48,'Beatrice','2% milk (4L/1G)',4.99,5,7),(49,'Beatrice','3% milk (4L/1G)',4.99,5,8),(50,'Becel','Margarine Original (907g)',6.99,5,1),(51,'Lactantia','Half and Half - 10%',2.59,5,3),(52,'Lactantia','Whipping Cream - 35%',3.59,5,5),(53,'Superstore','Large Eggs (12-Pack)',3.19,5,6),(54,'No Name','Pasteurized Cream Cheese',4.99,5,8),(55,'No Name','Salted Butter',2.99,5,9),(56,'No Name','Sour Cream 14% (500ml)',3.99,5,2),(57,'No Name','Unsalted Butter',2.99,5,4),(58,'Superstore','Free Run Brown Egg Large (12-pack)',4.59,5,1),(59,'Saputo','Mozzarellissima (500g)',11.99,5,4),(60,'Superstore','X-Large Eggs (12-pack)',3.59,5,7),(61,'a','Perfect Bronze Pressed Powder',3.99,6,3),(62,'b','Perfect Glow Topaz (8.2g)',3.99,6,4),(63,'aa','Dark Spot Corrector Cream',3.99,6,8),(64,'bb','Unicorn Cosmetic Set',3.99,6,1),(65,'bbb','Serum Foundation Warm Beige',3.99,6,7),(66,'c','Cosmetic Compact',3.99,6,8),(67,'cc','Rejuvenating Foot Spa Bath',3.99,6,3),(68,'gg','Loreal Paris',3.99,6,1),(69,'h','Trolley Cosmetic Case',3.99,6,6),(70,'jjjjj','Trolley Cosmetic Case Blue',3.99,6,7),(71,'aaaaa','Cheek Lip Multistick Sunrise',3.99,6,9),(72,'o','Cool Powder Bronzer',3.99,6,3),(73,'l','Cosmetic Wedges',3.99,6,4),(74,'s','Soft Cosmetic Brush',3.99,6,7),(75,'e','Friends Cosmetic Case Set (Pack of 3)',3.99,6,1),(76,'t','Prime H410M E-LGA 1200-Intel H410 SATA',3.99,7,8),(77,'popo','Image Class D1650 Monochrome Lazer Printer',3.99,7,9),(78,'p','cat5e Ethernet Cable',3.99,7,3),(79,'err','cat6 Green Ethernet Cable (10 Foot)',3.99,7,1),(80,'ataaa','Wall Plate White Dual',3.99,7,6),(81,'nm','Batteries Alkaline AA (24-pack)',3.99,7,9),(82,'hh','Batteries Alkaline AA (8-pack)',3.99,7,3),(83,'ys','Fiber Optic Cable LC-Duplex',3.99,7,6),(84,'saff','Fiber Optic Cable Single Mode Duplex',3.99,7,9),(85,'sff','Globe Electric With Slim Plug',3.99,7,2),(86,'vd','In-Ear Headphones',3.99,7,5),(87,'a','27\" Curved FHD-VA monitor',3.99,7,6),(88,'a','Black Toner Cartridge',3.99,7,7),(89,'a','HP 310 Gaming Headset',3.99,7,1),(90,'a','Slim cat6 Ethernet Cable',3.99,7,8),(91,'a','French Fried Potatoes',3.99,8,9),(92,'a','Macarroni and Cheese',3.99,8,1),(93,'a','Chopped Spinach (300g)',3.99,8,4),(94,'a','Crinkle Cut Fried Potatoes',3.99,8,6),(95,'a','Fried Potatoes Crispy with Skin-On',3.99,8,6),(96,'a','Green Peas (750g)',3.99,8,7),(97,'a','Mixed Vegetables (750g)',3.99,8,2),(98,'a','Mixed Vegetables (2kg)',3.99,8,2),(99,'a','Peas And Carrots (750g)',3.99,8,1),(100,'a','Potato Patties (20EA)',3.99,8,6),(101,'a','Whole Kernel Crons (750g)',3.99,8,7),(102,'a','Brocolli Florets (500g)',3.99,8,9),(103,'a','Mango Chunks (600g)',3.99,8,3),(104,'a','Pacific White Shrimp Raw Peeled',3.99,8,1),(105,'a','Sliced Strawberries (600g)',3.99,8,5),(106,'a','Air Wick Relax Scented Oil',3.99,9,6),(107,'a','100 Foil Wrap',3.99,9,9),(108,'a','Bl5 Maxi Lighter',3.99,9,3),(109,'a','Toilet Cleaner Gel',3.99,9,1),(110,'a','150 W Ultra Liquid April Fresh',3.99,9,3),(111,'a','Air Line and Sky',3.99,9,4),(112,'a','Aluminum Foil',3.99,9,5),(113,'a','Drain_Opener',3.99,9,6),(114,'a','Fruit Fly Trap',3.99,9,8),(115,'a','Napkins',3.99,9,4),(116,'a','Lemon Scent Dish Liquid',3.99,9,2),(117,'a','Bathroom Tissue',3.99,9,5),(118,'a','Liquid Og',3.99,9,7),(119,'a','Wet Cloth Febreze',3.99,9,9),(120,'a','Liquid Pods Original',3.99,9,1),(121,'a','1320 Sports Doll Clothes',3.99,10,2),(122,'a','1322 Kids Doll Clothes 2 Princess Dresses',3.99,10,3),(123,'a','Mtb1301 Doll Clothes (Set of 3)',3.99,10,5),(124,'a','Kid Boys Double Cloth Shirt',3.99,10,7),(125,'a','Flocked Kids Hangers',3.99,10,4),(126,'a','Solid Wood Kids Wooden Hangers (Set of 20)',3.99,10,2),(127,'a','Band Aid Large Gauze Pads',3.99,11,4),(128,'a','Band Aid Wet Flex Bandages',3.99,11,1),(129,'a','Medicated Berry Lip Balm',3.99,11,6),(130,'a','Flexible Band Aid',3.99,11,8),(131,'a','Foam Ring Cushion',3.99,11,4),(132,'a','Cot Style Finger Splin',3.99,11,9),(133,'a','Oral Medication Dispenser',3.99,11,8),(134,'a','Self Adhering Bandage',3.99,11,7),(135,'a','Small Rolled Gauze',3.99,11,6),(136,'a','Medicated Anti Itch Cream',3.99,11,4),(137,'a','Medicated Body Powder',3.99,11,2),(138,'a','Sensitive Skin Removable Tape',3.99,11,6),(139,'a','Medicated Cream',3.99,11,7),(140,'a','Tylenol 500Mg Eztabs (24 Tablets)',3.99,11,4),(141,'a','Vaporub Ointment',3.99,11,1),(142,'a','Crew Sock',3.99,12,4),(143,'a','Men\'s Poplin Pajama Pant',3.99,12,6),(144,'a','4 Pack Men\'s Comfort Soft Knit Boxer',3.99,12,3),(145,'a','Men\'s Large Stretch V-Neck Tee',3.99,12,5),(146,'a','Men\'s Medium Fleece Crew Neck',3.99,12,8),(147,'a','Men_Medium_Sleep_Pants',3.99,12,9),(148,'a','Organic Berry Fruit Snacks',3.99,13,2),(149,'a','Fruit By The Foot',3.99,13,3),(150,'a','Chips Ahoy Mini',3.99,13,6),(151,'a','Oreo Mini Snack Pack',3.99,13,5),(152,'a','Original Snacks',3.99,13,4),(153,'a','Cookies\'N\'Creme Snack Size Candy',3.99,13,8),(154,'a','MultiGrain Cereal Bars Apple',3.99,13,3),(155,'a','KitKat Hide Me Eggs',3.99,13,4),(156,'a','Pretzel Sticks',3.99,13,5),(157,'a','Snack Size Candy (120g)',3.99,13,6),(158,'a','Peanut Butter Filled Pretzels',3.99,13,7),(159,'a','Original Minis (191g)',3.99,13,1),(160,'a','Yogurt Raisins Vanilla',3.99,13,3),(161,'a','Pretzel Crisps Original',3.99,13,8),(162,'a','Music Keyboard',3.99,14,9),(163,'a','Drill\'n Fill Dentist Toy',3.99,14,3),(164,'a','5 Car Pack Assortment',3.99,14,4),(165,'a','Utility Trucks Toy',3.99,14,5),(166,'a','Vehicles',3.99,14,7),(167,'a',' Shark Bite Game',3.99,14,1),(168,'a','Soccerball',3.99,14,7),(169,'a','Paw Patrol',3.99,14,8),(170,'a','Wooden Puzzle Set',3.99,14,3),(171,'a','Barbie Pop Star Doll',3.99,14,4),(172,'a','Munchkin Duck Dunk Bath Toy',3.99,14,5),(173,'a','Kerplunk',3.99,14,7),(174,'a','Things',3.99,14,6),(175,'a','Play Day Play Balls',3.99,14,7),(176,'a','School Bus Playset',3.99,14,6),(177,'a','10 Comfort Cotton Socks',3.99,1,7),(178,'a','Women\'s No Show Liner Socks',3.99,1,8),(179,'a','Women\'s 1X Shapewear Boyshorts',3.99,1,3),(180,'a','Large Size Women\'s Cotton Bikini Briefs',3.99,1,4),(181,'a','Women\'s 1X Full Shapewear Slip',3.99,1,5),(182,'a','Women\'s Seamless Cross Back Sports Bra',3.99,1,1);
/*!40000 ALTER TABLE `product_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-12 15:54:01
