-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 27, 2018 at 03:51 PM
-- Server version: 10.1.35-MariaDB
-- PHP Version: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `frenchapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `learned`
--

CREATE TABLE `learned` (
  `LEARNEDID` int(6) UNSIGNED NOT NULL,
  `WORD` int(6) UNSIGNED DEFAULT NULL,
  `ID` int(6) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID` int(6) UNSIGNED NOT NULL,
  `username` varchar(30) COLLATE utf8_bin NOT NULL,
  `email` varchar(30) COLLATE utf8_bin NOT NULL,
  `password` varchar(255) COLLATE utf8_bin NOT NULL,
  `name` varchar(30) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `username`, `email`, `password`, `name`) VALUES
(1, '', 'test@test.com', '$2y$10$eHe/7QUnMgJDWFDO8sHAYODH069Sc4drqvO2RBdk1ZbTzmbOaNFVq', 'test'),
(27, '', 'poppy@poppy.com', '$2y$10$zyhWGqJFJnQdrBzBNPeye.9MqslNiKL0mi4fUzP/gbuhcwgkcbu5W', 'poppy');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `learned`
--
ALTER TABLE `learned`
  ADD PRIMARY KEY (`LEARNEDID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `learned`
--
ALTER TABLE `learned`
  MODIFY `LEARNEDID` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=724;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
