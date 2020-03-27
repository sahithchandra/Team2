DROP TABLE IF EXISTS `expense_tracker_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `expense_tracker_users` (
  `USER_ID` int NOT NULL AUTO_INCREMENT,
  `USER_NAME` varchar(25) NOT NULL,
  `EMAIL` varchar(25) NOT NULL,
  `PASSWORD` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`EMAIL`),
  KEY `USER_ID` (`USER_ID`)
);