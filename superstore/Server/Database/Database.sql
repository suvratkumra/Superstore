-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: superstore_database
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
  `cust_id` int NOT NULL,
  `added_products` varchar(45) NOT NULL,
  `price` double NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`cust_id`,`added_products`,`quantity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_details`
--

LOCK TABLES `cart_details` WRITE;
/*!40000 ALTER TABLE `cart_details` DISABLE KEYS */;
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
INSERT INTO `product_details` VALUES (1,'Country Harvest','14 Grain Whole Wheat Bread',3.21,2,14),(2,'Farmer\'s Market','Banana Chocolate Muffin',4.99,2,5),(3,'Farmer\'s Market','Banana Loaf Cake',4.49,2,7),(4,'Farmer\'s Market','Butter Croissant',3.49,2,8),(5,'President\'s Choice','Chocolate Mini Muffin',3.99,2,2),(6,'Farmer\'s Market','Chocolate Chip Muffin',4.99,2,1),(7,'Country Harvest','Cinnamon Raisin Bread',2.99,2,4),(8,'Farmer\'s Market','Double Chocolate Muffin',4.99,2,6),(9,'Superstore','French Bread',0.99,2,8),(10,'Casa Mendosa','Large Original Tortillas',5.99,2,2),(11,'President\'s Choice','Tortillas Original',4.99,2,3),(12,'Superstore','Rolls 6 Pack',2.49,2,9),(13,'Superstore','Sourdough Loaf Sliced',1.49,2,8),(14,'Country Harvest','Stone Milled With Roasted Wheat',2.99,2,7),(15,'Suraj','Naan Original',3.99,2,5),(16,'Superstore','Coconut',3.99,3,2),(17,'Great Value','Cranberries',3.99,3,3),(18,'Superstore','Dill',2.99,3,5),(19,'Superstore','Fresh Mint',1.99,3,6),(20,'Superstore','Garlic',2.59,3,1),(21,'Great Value','Fruit Salad With Cherries',5.99,3,6),(22,'Superstore','Kale Sweet Salad',4.99,3,7),(23,'Your Fresh Market','Lemon',5.99,3,8),(24,'Superstore','Lettuce Butter',4.49,3,1),(25,'Superstore','Mango Red',1.49,3,3),(26,'President\'s Choice','Organic Brown Bell Pepper',1.49,3,4),(27,'President\'s Choice ','Organic Cauliflower 6 Pack',3.99,3,5),(28,'Superstore','Parsnip',1.49,3,5),(29,'Your Fresh Market','Potatoes Yellow',5.99,3,6),(30,'Presiden\'t Choice','Raspberries Original',3.99,3,7),(31,'Superstore','Chicken Breast ClubPack',23.99,4,8),(32,'Superstore','Chicken Leg ClubPack',18.99,4,9),(33,'Superstore','Chicken Thigh ClubPack',16.99,4,2),(34,'Superstore','Extra Lean Ground Beef',12.99,4,3),(35,'Schneiders','Juicy Jumbo All Beef Wieners',11.99,4,5),(36,'Superstore','Lean Ground Beef 456g',7.99,4,1),(37,'No Name','Mild Sugar Cured Bacon',3.99,4,6),(38,'President\'s Choice','Minced Turkey',6.99,4,7),(39,'Maple Leaf','Natural Top Dogs',8.99,4,4),(40,'No Name','Hot Dogs',5.99,4,1),(41,'President\'s Choice','Boneless Chicken Breast',10.99,4,3),(42,'President\'s Choice','Mild Italian Pork (6-Pack)',9.99,4,7),(43,'Superstore','Pork Tendalion (2-Pack)',21.99,4,6),(44,'Schneiders','Classic Cut Bacon',5.99,4,8),(45,'Smokehouse','Bacon Original',6.99,4,9),(46,'Astro','Balkan Style Yogurt (750g)',4.99,5,5),(47,'Beatrice','1% milk (4L/1G)',4.99,5,6),(48,'Beatrice','2% milk (4L/1G)',4.99,5,7),(49,'Beatrice','3% milk (4L/1G)',4.99,5,8),(50,'Becel','Margarine Original (907g)',6.99,5,1),(51,'Lactantia','Half and Half - 10%',2.59,5,3),(52,'Lactantia','Whipping Cream - 35%',3.59,5,5),(53,'Superstore','Large Eggs (12-Pack)',3.19,5,6),(54,'No Name','Pasteurized Cream Cheese',4.99,5,8),(55,'No Name','Salted Butter',2.99,5,9),(56,'No Name','Sour Cream 14% (500ml)',3.99,5,2),(57,'No Name','Unsalted Butter',2.99,5,4),(58,'Superstore','Free Run Brown Egg Large (12-pack)',4.59,5,1),(59,'Saputo','Mozzarellissima (500g)',11.99,5,4),(60,'Superstore','X-Large Eggs (12-pack)',3.59,5,7),(61,'Annabelle','Perfect Bronze Pressed Powder',7.19,6,3),(62,'Annabelle','Perfect Glow Topaz (8.2g)',7.99,6,4),(63,'BV','Dark Spot Corrector Cream',50,6,8),(64,'Deluxe','Unicorn Cosmetic Set',34.99,6,1),(65,'Flower','Serum Foundation Warm Beige',21.99,6,7),(66,'Girl on the Go','Cosmetic Compact',7.59,6,8),(67,'Lomi','Rejuvenating Foot Spa Bath',39.59,6,3),(68,'Loreal','Infallible 24H Fresh Wear In a Powder',17.99,6,1),(69,'Lug','Trolley Cosmetic Case',67.99,6,6),(70,'Lug','Trolley Cosmetic Case Blue',67.99,6,7),(71,'Quo Beauty','Cheek Lip Multistick Sunrise',7.99,6,9),(72,'Quo Beauty','Cool Powder Bronzer',9.99,6,3),(73,'Quo Beauty','Cosmetic Wedges',4.59,6,4),(74,'Refectocil','Soft Cosmetic Brush',32.99,6,7),(75,'Superstore','Friends Cosmetic Case Set (Pack of 3)',40.25,6,1),(76,'Asus','Prime H410M E-LGA 1200-Intel H410 SATA',199.99,7,8),(77,'Canon','Image Class D1650 Monochrome Lazer Printer',399.99,7,9),(78,'Superstore','cat5e Ethernet Cable',10.99,7,3),(79,'Superstore','cat6 Green Ethernet Cable (10 Foot)',9.99,7,1),(80,'Decora','Wall Plate White Dual',15.99,7,6),(81,'Energizer','Batteries Alkaline AA (24-pack)',21.99,7,9),(82,'Energizer','Batteries Alkaline AA (8-pack)',8.99,7,3),(83,'Superstore','Fiber Optic Cable LC-Duplex',6.99,7,6),(84,'Superstore','Fiber Optic Cable Single Mode Duplex',4.99,7,9),(85,'Globe','Globe Electric With Slim Plug',10.99,7,2),(86,'JVC','In-Ear Headphones',23.99,7,5),(87,'Samsung','27\" Curved FHD-VA monitor',259.99,7,6),(88,'Samsung','Black Toner Cartridge',14.99,7,7),(89,'Xtrike','HP 310 Gaming Headset',23.99,7,1),(90,'Superstore','Slim cat6 Ethernet Cable',10.99,7,8),(91,'McCain','French Fried Potatoes',4.99,8,9),(92,'Michelina','Macarroni and Cheese',5.99,8,1),(93,'No Name','Chopped Spinach (300g)',3.49,8,4),(94,'No Name','Crinkle Cut Fried Potatoes',5.49,8,6),(95,'No Name','Fried Potatoes Crispy with Skin-On',5.49,8,6),(96,'No Name','Green Peas (750g)',3.99,8,7),(97,'No Name','Mixed Vegetables (750g)',3.99,8,2),(98,'No Name','Mixed Vegetables (2kg)',3.99,8,2),(99,'No Name','Peas And Carrots (750g)',3.99,8,1),(100,'No Name','Potato Patties (20EA)',16.99,8,6),(101,'No Name','Whole Kernel Crons (750g)',2.99,8,7),(102,'President\'s Choice','Brocolli Florets (500g)',4.99,8,9),(103,'President\'s Choice','Mango Chunks (600g)',6.99,8,3),(104,'President\'s Choice','Pacific White Shrimp Raw Peeled',15.99,8,1),(105,'President\'s Choice','Sliced Strawberries (600g)',10.99,8,5),(106,'Reckitt','Air Wick Relax Scented Oil',12.49,9,6),(107,'Alcan','100 Foil Wrap',6.75,9,9),(108,'BIC','Bl5 Maxi Lighter',4.5,9,3),(109,'Clorox','Toilet Cleaner Gel',2.99,9,1),(110,'Downy','150 W Ultra Liquid April Fresh',13.99,9,3),(111,'Febreze','Air Line and Sky',3.67,9,4),(112,'Great value','Aluminum Foil',3.57,9,5),(113,'Great Value','Drain_Opener',4.99,9,6),(114,'Great Value','Fruit Fly Trap',5.67,9,8),(115,'Great Vslue','Napkins',3.29,9,4),(116,'Palmolive','Lemon Scent Dish Liquid',2.45,9,2),(117,'Royale Velour','Bathroom Tissue',5.55,9,5),(118,'Swiffer','Liquid Og',4.71,9,7),(119,'Swiffer','Wet Cloth Febreze',5.99,9,9),(120,'Tide','Liquid Pods Original',6.77,9,1),(121,'Get Ready','1320 Sports Doll Clothes',62.19,10,2),(122,'Get Ready','1322 Kids Doll Clothes 2 Princess Dresses',73.99,10,3),(123,'Get Ready','Mtb1301 Doll Clothes (Set of 3)',50,10,5),(124,'Joe Fresh','Kid Boys Double Cloth Shirt',19.99,10,7),(125,'Life At Home','Flocked Kids Hangers',11.99,10,4),(126,'Superstore','Solid Wood Kids Wooden Hangers (Set of 20)',17.59,10,2),(127,'Johnson-Johnson','Band Aid Large Gauze Pads',5.99,11,4),(128,'Johnson-Johnson','Band Aid Wet Flex Bandages',5.99,11,1),(129,'Blistex','Medicated Berry Lip Balm',6.99,11,6),(130,'Johnson-Johnson','Flexible Band Aid',5.99,11,8),(131,'Drive Medical','Foam Ring Cushion',6.99,11,4),(132,'Equate','Cot Style Finger Splin',3.99,11,9),(133,'Equate','Oral Medication Dispenser',5.99,11,8),(134,'Equate','Self Adhering Bandage',8.99,11,7),(135,'Equate','Small Rolled Gauze',3.99,11,6),(136,'Gold Band','Medicated Anti Itch Cream',5.99,11,4),(137,'Gold Band','Medicated Body Powder',3.99,11,2),(138,'Nexcare','Sensitive Skin Removable Tape',5.99,11,6),(139,'Paneten','Medicated Cream',4.99,11,7),(140,'Tylenol','Tylenol 500Mg Eztabs (24 Tablets)',4.99,11,4),(141,'Vicks','Vaporub Ointment',5.99,11,1),(142,'Reebok','Crew Sock',12.99,12,4),(143,'George','Men\'s Poplin Pajama Pant',11.99,12,6),(144,'Hanest','4 Pack Men\'s Comfort Soft Knit Boxer',23.5,12,3),(145,'George','Men\'s Large Stretch V-Neck Tee',9.99,12,5),(146,'Athletic Works','Men\'s Medium Fleece Crew Neck',15.99,12,8),(147,'Hanes','Men_Medium_Sleep_Pants',7,12,9),(148,'Annies','Organic Berry Fruit Snacks',2.19,13,2),(149,'Betty Crocker','Fruit By The Foot',4.99,13,3),(150,'Christie','Chips Ahoy Mini',6.99,13,6),(151,'Christie','Oreo Mini Snack Pack',6.99,13,5),(152,'Crispers','Original Snacks',4.99,13,4),(153,'Hershey\'s','Cookies\'N\'Creme Snack Size Candy',3.59,13,8),(154,'Kelloggs\'','MultiGrain Cereal Bars Apple',8.99,13,3),(155,'Nestle','KitKat Hide Me Eggs',5.99,13,4),(156,'No Name','Pretzel Sticks',3.99,13,5),(157,'OH Henry','Snack Size Candy (120g)',0.99,13,6),(158,'President\'s Choice','Peanut Butter Filled Pretzels',4.99,13,7),(159,'Starburst','Original Minis (191g)',4.59,13,1),(160,'Sunmaid','Yogurt Raisins Vanilla',3.99,13,3),(161,'The Snack Factory','Pretzel Crisps Original',5.25,13,8),(162,'Kid Connection','Music Keyboard',25.99,14,9),(163,'Play Doh','Drill\'n Fill Dentist Toy',11.99,14,3),(164,'Mattel Hot Wheels','5 Car Pack Assortment',5.99,14,4),(165,'Kid Connection','Utility Trucks Toy',9.99,14,5),(166,'Mattel Hot Wheels','Vehicles',15.99,14,7),(167,'Pressman',' Shark Bite Game',20.99,14,1),(168,'Regent','Soccerball',12.99,14,7),(169,'Size 3T','Paw Patrol',12.99,14,8),(170,'Spark','Wooden Puzzle Set',20.99,14,3),(171,'Barbie','Barbie Pop Star Doll',12.99,14,4),(172,'President\'s Choice','Munchkin Duck Dunk Bath Toy',7.99,14,5),(173,'Mattel','Kerplunk',8.99,14,7),(174,'PlayMonster ','PlayMonster Things',6.99,14,6),(175,'Play Day','Play Day Play Balls',21.99,14,7),(176,'Playmobil','School Bus Playset',5.99,14,6),(177,'Secret 6','10 Comfort Cotton Socks',7.89,1,7),(178,'Reebok','Women\'s No Show Liner Socks',14,1,8),(179,'George','Women\'s 1X Shapewear Boyshorts',16.5,1,3),(180,'George','Large Size Women\'s Cotton Bikini Briefs',7,1,4),(181,'George','Women\'s 1X Full Shapewear Slip',25.99,1,5),(182,'Athletic Works','Women\'s Seamless Cross Back Sports Bra',17,1,1);
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

-- Dump completed on 2022-04-11 11:47:24
