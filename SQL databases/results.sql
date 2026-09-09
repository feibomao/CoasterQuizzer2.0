-- phpMyAdmin SQL Dump
-- version 5.2.3-1.el9
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 01, 2026 at 12:18 AM
-- Server version: 9.1.0-commercial
-- PHP Version: 8.2.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `weic39_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `results`
--

CREATE TABLE `results` (
  `gameNum` int NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `score` int NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `results`
--

INSERT INTO `results` (`gameNum`, `email`, `score`, `time`) VALUES
(1, 'a@b.c', 920, '2026-03-30 21:55:11'),
(2, 'a@b.c', 920, '2026-03-30 21:55:40'),
(3, 'a@b.c', 920, '2026-03-30 21:57:01'),
(4, 'a@b.c', 920, '2026-03-30 21:59:04'),
(5, 'a@b.c', 920, '2026-03-30 21:59:44'),
(6, 'a@b.c', 933, '2026-03-30 22:00:02'),
(7, 'a@b.c', 933, '2026-03-30 22:02:07'),
(8, 'a@b.c', 933, '2026-03-30 22:03:09'),
(9, 'a@b.c', 933, '2026-03-30 22:03:12'),
(10, 'a@b.c', 933, '2026-03-30 22:03:20'),
(11, 'a@b.c', 933, '2026-03-30 22:04:00'),
(12, 'name@example.com', 593, '2026-03-30 22:08:53'),
(13, 'name@example.com', 593, '2026-03-30 22:10:20'),
(14, 'name@example.com', 953, '2026-03-30 22:10:44'),
(15, 'a@b.c', 920, '2026-03-31 00:46:30'),
(16, 'a@b.c', 920, '2026-03-31 00:46:54'),
(17, 'a@b.c', 920, '2026-03-31 00:46:56'),
(18, 'a@b.c', 920, '2026-03-31 00:47:25'),
(19, 'a@b.c', 920, '2026-03-31 00:48:35'),
(20, 'a@b.c', 920, '2026-03-31 00:55:46'),
(21, 'a@b.c', 920, '2026-03-31 00:56:33'),
(22, 'a@b.c', 920, '2026-03-31 00:57:13'),
(23, 'a@b.c', 920, '2026-03-31 00:58:21'),
(24, 'a@b.c', 920, '2026-03-31 00:59:22'),
(25, 'a@b.c', 920, '2026-03-31 01:00:00'),
(26, 'a@b.c', 920, '2026-03-31 01:00:59'),
(27, 'a@b.c', 920, '2026-03-31 01:01:19'),
(28, 'a@b.c', 920, '2026-03-31 01:01:33'),
(29, 'a@b.c', 920, '2026-03-31 01:01:34'),
(30, 'a@b.c', 920, '2026-03-31 01:01:42'),
(31, 'a@b.c', 920, '2026-03-31 01:07:23'),
(32, 'a@b.c', 920, '2026-03-31 01:07:25'),
(33, 'a@b.c', 920, '2026-03-31 01:07:30'),
(34, 'a@b.c', 920, '2026-03-31 01:07:39'),
(35, 'a@b.c', 920, '2026-03-31 01:07:51'),
(36, 'c@b.a', 927, '2026-03-31 01:30:07'),
(37, 'some@name.idk', 927, '2026-03-31 01:32:58'),
(38, 'a@s.df', 933, '2026-03-31 01:37:42'),
(39, 'n@e.w', 973, '2026-03-31 01:38:12'),
(40, 'a@b.c', 16240, '2026-03-31 02:04:52'),
(41, 'hsdfasdf@gmail.com', 3593, '2026-03-31 23:36:50'),
(42, 'name@example.com', 16073, '2026-04-01 00:17:20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `results`
--
ALTER TABLE `results`
  ADD PRIMARY KEY (`gameNum`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `results`
--
ALTER TABLE `results`
  MODIFY `gameNum` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
