-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Aug 02, 2022 at 06:27 PM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `galutinis`
--

-- --------------------------------------------------------

--
-- Table structure for table `atsakymai`
--

CREATE TABLE `atsakymai` (
  `a_id` int(11) NOT NULL,
  `answer` text NOT NULL,
  `q_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `a_timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `a_edited_timestamp` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `isEditedA` tinyint(1) NOT NULL DEFAULT '0',
  `a_likes` int(11) NOT NULL DEFAULT '0',
  `archivedA` tinyint(4) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `atsakymai`
--

INSERT INTO `atsakymai` (`a_id`, `answer`, `q_id`, `user_id`, `a_timestamp`, `a_edited_timestamp`, `isEditedA`, `a_likes`, `archivedA`) VALUES
(1, 'You can start bathing it since 4 weeks old', 1, 2, '2022-07-27 09:36:20', '2022-08-02 17:08:06', 0, 2, 1),
(2, 'Breeder starts bathing it young, you can start right after getting puppy too', 1, 2, '2022-07-27 09:36:20', '2022-08-02 17:15:39', 1, 7, 0),
(3, 'from 4 weeks, take to groomer when has all shots', 1, 2, '2022-07-27 09:57:24', '2022-08-01 11:26:44', 0, 1, 1),
(4, 'from 4 weeks', 1, 2, '2022-07-27 09:58:39', '2022-07-30 18:53:51', 0, 5, 1),
(5, 'Or maybe 5w edited ffff', 1, 2, '2022-07-27 09:58:41', '2022-08-02 18:00:02', 1, 1, 1),
(6, '3 or 4 times a day, later at least 2', 3, 12, '2022-07-29 19:26:13', '2022-08-01 19:16:37', 0, 0, 1),
(7, 'new answer', 3, 12, '2022-07-29 19:49:29', '2022-08-01 19:16:37', 0, 0, 1),
(8, 'I fill full bowl, and only refill when its empty ', 4, 2, '2022-07-30 14:18:38', '2022-08-02 17:21:11', 1, 1, 0),
(9, '2 times a day', 4, 2, '2022-07-30 14:19:53', '2022-08-02 17:21:13', 0, -1, 1),
(10, 'I always leave food', 4, 2, '2022-07-30 14:21:08', '2022-08-02 17:21:18', 0, 2, 1),
(11, ' As much as it wants ', 4, 2, '2022-08-01 09:24:34', '2022-08-01 15:17:10', 0, 0, 0),
(12, '2 times or more if it wants more', 4, 2, '2022-08-01 09:24:49', '2022-08-01 14:57:46', 1, 0, 0),
(13, 'I started as soon as I adopted a puppy, it was 3 months old', 1, 2, '2022-08-02 14:12:37', '2022-08-02 14:13:19', 1, 0, 0),
(14, 'ersgfwersfeafgs', 32, 2, '2022-08-02 17:29:02', '2022-08-02 17:29:20', 0, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `klausimai`
--

CREATE TABLE `klausimai` (
  `q_id` int(11) NOT NULL,
  `q_title` varchar(255) NOT NULL,
  `question` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `q_timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `qEdited_timestamp` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `q_likes` int(11) NOT NULL DEFAULT '0',
  `archivedQ` tinyint(1) NOT NULL DEFAULT '0',
  `isEdited` tinyint(1) NOT NULL DEFAULT '0',
  `answersNo` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `klausimai`
--

INSERT INTO `klausimai` (`q_id`, `q_title`, `question`, `user_id`, `q_timestamp`, `qEdited_timestamp`, `q_likes`, `archivedQ`, `isEdited`, `answersNo`) VALUES
(1, 'Puppy bathing', 'Puppy bathing thxretwrewrefwe ,hkhjhbjb', 2, '2022-07-26 09:30:17', '2022-08-02 17:20:15', 10, 0, 1, 1),
(2, 'Best food', 'How many times a day should I feed puppy nfjgkllkjhjgjggergrdg', 2, '2022-07-26 09:30:17', '2022-08-02 13:40:38', 1, 0, 1, 0),
(3, 'Feeding puppy', 'How many times a day should I feed puppy', 2, '2022-07-26 10:11:08', '2022-08-01 19:16:37', 5, 1, 1, 0),
(4, 'Feeding cat', 'How many times to feed a cat', 2, '2022-07-26 16:59:18', '2022-08-02 13:40:39', 2, 0, 0, 0),
(5, 'Feeding cow', 'this is not a cow no more', 2, '2022-07-26 17:20:32', '2022-08-01 11:31:01', 3, 0, 0, 0),
(6, 'collie or sheepherd delete this', 'What is your opinion on these breeds', 2, '2022-07-30 14:51:24', '2022-08-01 12:27:26', 0, 1, 0, 0),
(7, 'collie or sheepherd', 'What is your opinion on these breeds', 2, '2022-07-30 14:52:24', '2022-08-02 17:56:55', 2, 1, 0, 0),
(8, 'collie or sheepherd', 'What is your opinion on these breeds', 2, '2022-07-30 14:53:54', '2022-07-30 18:54:00', 0, 1, 0, 0),
(9, 'collie or sheepherd', 'What is your opinion on these breeds', 2, '2022-07-30 14:53:55', '2022-07-30 18:26:41', 0, 1, 0, 0),
(10, 'collie or sheepherd', 'What is your opinion on these breeds', 2, '2022-07-30 14:53:56', '2022-07-30 18:26:41', 0, 1, 0, 0),
(11, 'collie or sheepherd', 'What is your opinion on these breeds', 2, '2022-07-30 14:53:56', '2022-07-30 18:26:41', 0, 1, 0, 0),
(12, 'collie or sheepherd', 'What is your opinion on these breeds', 2, '2022-07-30 14:53:56', '2022-07-30 18:26:41', 0, 1, 0, 0),
(13, 'collie or sheepherd', 'What is your opinion on these breeds', 2, '2022-07-30 14:53:57', '2022-08-02 13:29:35', 2, 0, 0, 0),
(14, 'collie or sheepherd', 'What is your opinion on these breeds', 2, '2022-07-30 14:53:57', '2022-07-30 18:26:41', 0, 1, 0, 0),
(15, 'Collie or sheepherd', 'What is better breed what is your opinion', 2, '2022-07-30 14:54:28', '2022-08-02 18:10:16', 8, 1, 0, 0),
(16, 'Collie or sheepherd', 'What is better breed what is your opinion', 2, '2022-07-30 14:54:29', '2022-07-30 18:26:41', 0, 1, 0, 0),
(31, 'What hamster lives longest?', 'hi, i want to get a hamster and was wandering if you could tell me which breed lives longest, thank you all', 2, '2022-08-01 13:08:50', '2022-08-02 16:10:52', 10, 0, 1, 0),
(32, 'Favourite animal', 'What is your favourite animal', 2, '2022-08-02 17:23:06', '2022-08-02 17:29:20', 0, 1, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `reg_timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `email`, `reg_timestamp`, `password`) VALUES
(2, 'joany', 'joan@joan.com', '2022-07-26 09:21:21', '$2a$10$aagoH.PJmniko0dpE6Pn2ucBuVSgc0Fbl7S8AuyHx5w/vrMR7/cf2'),
(3, 'gretaa', 'greta@greta.com', '2022-07-27 15:52:57', '$2a$10$HPlabOR9y4Nz63ZzqpS2C.q7L.jfKVTx/qlaORCH70Ms7msyR3mLO'),
(12, 'annyy', 'ann@ann.com', '2022-07-27 16:05:59', '$2a$10$OeTqgIWAwhDLd33vZ8ZmOO5MrV6/1yznSomn7AR4eetPMEIwNX.si'),
(15, 'sammmyy', 'sam@sam.com', '2022-07-27 16:08:31', '$2a$10$fwAOZyIRE6QeFjgGHkYM7OxAoi6aIQNFxvvUH0MsBFZqYB9MnVhyG'),
(17, 'tommmmm', 'tom@tom.com', '2022-07-27 16:10:39', '$2a$10$6cZqtqIsU9PhUfzdY5sxFOJaCtjXZ37eTa0Gok1JVUMY8oSOiQsUC'),
(18, 'daniel', 'dan@dan.com', '2022-07-27 16:13:18', '$2a$10$wbZ6ObXM0H49HwhY1GHrKeZkGqtlmvnFTsERyFegwuq5fLphvR7By');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `atsakymai`
--
ALTER TABLE `atsakymai`
  ADD PRIMARY KEY (`a_id`);

--
-- Indexes for table `klausimai`
--
ALTER TABLE `klausimai`
  ADD PRIMARY KEY (`q_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `atsakymai`
--
ALTER TABLE `atsakymai`
  MODIFY `a_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `klausimai`
--
ALTER TABLE `klausimai`
  MODIFY `q_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
