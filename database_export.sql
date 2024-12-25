-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: medingen_db
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `faqs`
--

DROP TABLE IF EXISTS `faqs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faqs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question` text,
  `answer` text,
  `medicine_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `medicine_id` (`medicine_id`),
  CONSTRAINT `faqs_ibfk_1` FOREIGN KEY (`medicine_id`) REFERENCES `medicines` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faqs`
--

LOCK TABLES `faqs` WRITE;
/*!40000 ALTER TABLE `faqs` DISABLE KEYS */;
INSERT INTO `faqs` VALUES (1,'Can I take paracetamol on an empty stomach?','Yes, paracetamol can be taken on an empty stomach.',1),(2,'What is the maximum daily dose of paracetamol?','The maximum dose is 4 grams per day for adults.',1),(3,'Can ibuprofen cause stomach problems?','Yes, it may cause stomach problems if taken on an empty stomach.',2),(4,'How long does ibuprofen take to work?','It usually starts working within 30 minutes.',2),(5,'Can cetirizine make you drowsy?','Yes, drowsiness is a common side effect of cetirizine.',3),(6,'How often can I take cetirizine?','Cetirizine is usually taken once a day.',3),(7,'Is amoxicillin safe during pregnancy?','Amoxicillin is generally considered safe during pregnancy but consult your doctor.',4),(8,'Can I consume alcohol while taking amoxicillin?','It is better to avoid alcohol while on amoxicillin as it may reduce its effectiveness.',4);
/*!40000 ALTER TABLE `faqs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicines`
--

DROP TABLE IF EXISTS `medicines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicines` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `generic_name` varchar(100) DEFAULT NULL,
  `formulation` varchar(50) DEFAULT NULL,
  `dosage` varchar(50) DEFAULT NULL,
  `manufacturer` varchar(100) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `discount_percent` int DEFAULT NULL,
  `description` text,
  `about` text,
  `uses` text,
  `how_it_works` text,
  `image_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicines`
--

LOCK TABLES `medicines` WRITE;
/*!40000 ALTER TABLE `medicines` DISABLE KEYS */;
INSERT INTO `medicines` VALUES (1,'Paracetamol 500mg','Paracetamol','Tablet','500mg','ABC Pharmaceuticals',50.00,10,'A pain reliever and a fever reducer.','Paracetamol is used to treat mild to moderate pain and reduce fever. It is widely recommended for its safety and efficacy.','1. Relief from headaches\n2. Reduces fever\n3. Alleviates muscle pain\n4. Helps in toothaches\n5. Eases arthritis pain','1. It inhibits the production of prostaglandins, chemicals that cause pain and fever.\n2. Works effectively by acting on the brain to regulate temperature.','https://via.placeholder.com/150'),(2,'Ibuprofen 200mg','Ibuprofen','Tablet','200mg','XYZ Pharma',75.00,15,'A nonsteroidal anti-inflammatory drug (NSAID) used to treat pain and inflammation.','Ibuprofen is effective for relieving inflammation and pain, making it a common choice for various ailments.','1. Reduces inflammation\n2. Alleviates joint pain\n3. Relieves headaches\n4. Eases menstrual cramps\n5. Reduces back pain','1. It works by inhibiting cyclooxygenase enzymes (COX-1 and COX-2).\n2. This reduces prostaglandins responsible for inflammation and pain.','https://via.placeholder.com/150'),(3,'Cetirizine 10mg','Cetirizine','Tablet','10mg','PQR Healthcare',40.00,5,'An antihistamine used to relieve allergy symptoms.','Cetirizine is an effective medication to alleviate allergic reactions such as hay fever and hives.','1. Reduces sneezing\n2. Relieves itchy eyes\n3. Minimizes runny nose\n4. Reduces skin rash\n5. Eases sinus congestion','1. Blocks histamine, a substance in the body that causes allergy symptoms.\n2. Provides long-lasting relief from allergic reactions.','https://via.placeholder.com/150'),(4,'Amoxicillin 500mg','Amoxicillin','Capsule','500mg','LMN Biotech',60.00,20,'An antibiotic used to treat various bacterial infections.','Amoxicillin is widely used to fight bacterial infections effectively and is part of the penicillin group.','1. Treats respiratory infections\n2. Combats skin infections\n3. Alleviates urinary tract infections\n4. Fights ear infections\n5. Treats sinusitis','1. Inhibits bacterial cell wall synthesis, preventing bacteria from growing.\n2. Kills bacteria causing the infection.','https://via.placeholder.com/150');
/*!40000 ALTER TABLE `medicines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `medicine_id` int DEFAULT NULL,
  `rating` decimal(2,1) DEFAULT NULL,
  `review_text` text,
  PRIMARY KEY (`id`),
  KEY `medicine_id` (`medicine_id`),
  CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`medicine_id`) REFERENCES `medicines` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,1,4.5,'Effective for headaches and fever. Mild on the stomach.'),(2,1,4.0,'Works quickly but use cautiously if you have liver issues.'),(3,2,4.2,'Great for muscle pain and inflammation.'),(4,2,3.8,'Helpful for back pain but caused slight heartburn.'),(5,3,4.0,'Very effective for allergies with minimal side effects.'),(6,3,3.5,'Works well but causes drowsiness.'),(7,4,4.3,'Highly effective for infections. Quick results.'),(8,4,3.9,'Good for infections but caused mild nausea.');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `side_effects`
--

DROP TABLE IF EXISTS `side_effects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `side_effects` (
  `id` int NOT NULL AUTO_INCREMENT,
  `medicine_id` int DEFAULT NULL,
  `effect` text,
  PRIMARY KEY (`id`),
  KEY `medicine_id` (`medicine_id`),
  CONSTRAINT `side_effects_ibfk_1` FOREIGN KEY (`medicine_id`) REFERENCES `medicines` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `side_effects`
--

LOCK TABLES `side_effects` WRITE;
/*!40000 ALTER TABLE `side_effects` DISABLE KEYS */;
INSERT INTO `side_effects` VALUES (1,1,'Nausea'),(2,1,'Dizziness'),(3,1,'Rash'),(4,1,'Stomach upset'),(5,1,'Liver damage'),(6,2,'Heartburn'),(7,2,'Nausea'),(8,2,'Diarrhea'),(9,2,'Drowsiness'),(10,2,'Kidney issues'),(11,3,'Dry mouth'),(12,3,'Fatigue'),(13,3,'Drowsiness'),(14,3,'Nausea'),(15,3,'Headache'),(16,4,'Diarrhea'),(17,4,'Nausea'),(18,4,'Rash'),(19,4,'Abdominal pain'),(20,4,'Allergic reactions');
/*!40000 ALTER TABLE `side_effects` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-25 21:53:16
