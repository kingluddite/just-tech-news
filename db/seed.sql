-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)
--
-- Host: localhost    Database: just_tech_news_db
-- ------------------------------------------------------
-- Server version	8.0.23

USE just_tech_news_db;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'joey','joey@doe.com','$2b$10$AVS0JMsqBXHcWeYsrmN7XevicQgJMPXgxNfjLWMK5jrhK23oQ6QkO','2021-03-23 21:45:19','2021-03-23 21:45:19'),(2,'jane','jane@doe.com','$2b$10$g/E4q11ovw2CCRdAc4Lnt.lpkvndd0Fm3WJ7tNGJPSL2lWu6tuLyG','2021-03-23 21:45:30','2021-03-23 21:45:30'),(3,'john','john@doe.com','$2b$10$kzfVrAeYw1kPUcDf.RfMA.UiIk.4BDo2xlMXuGuFkOnLrUchyCYC.','2021-03-23 21:45:39','2021-03-23 21:45:39');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,'running','https://runbuddy.com/press',3,'2021-03-23 21:45:57','2021-03-23 21:45:57'),(2,'walk','https://runbuddy.com/press',2,'2021-03-23 21:46:04','2021-03-23 21:46:04'),(3,'sleep','https://runbuddy.com/press',1,'2021-03-23 21:46:11','2021-03-23 21:46:11');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,'I like this post',2,2,'2021-03-23 21:46:40','2021-03-23 21:46:40'),(2,'I like this post',1,3,'2021-03-23 21:46:46','2021-03-23 21:46:46'),(3,'I like this post',3,1,'2021-03-23 21:46:51','2021-03-23 21:46:51');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `vote`
--

LOCK TABLES `vote` WRITE;
/*!40000 ALTER TABLE `vote` DISABLE KEYS */;
INSERT INTO `vote` VALUES (3,1,2),(2,2,3),(1,3,3);
/*!40000 ALTER TABLE `vote` ENABLE KEYS */;
UNLOCK TABLES;

-- Dump completed on 2021-03-23 17:56:03
