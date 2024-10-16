-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 16, 2024 at 06:07 PM
-- Server version: 8.0.39-0ubuntu0.22.04.1
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todolist_app`
--
CREATE DATABASE IF NOT EXISTS `todolist_app` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `todolist_app`;

-- --------------------------------------------------------

--
-- Table structure for table `checklist`
--

DROP TABLE IF EXISTS `checklist`;
CREATE TABLE `checklist` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `checklist`
--

INSERT INTO `checklist` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Checklist 1 editted', '2024-10-16 10:24:01', '2024-10-16 10:26:01');

-- --------------------------------------------------------

--
-- Table structure for table `checklist_item`
--

DROP TABLE IF EXISTS `checklist_item`;
CREATE TABLE `checklist_item` (
  `id` int NOT NULL,
  `item_name` varchar(255) NOT NULL,
  `checklist_id` int NOT NULL,
  `is_checked` tinyint NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `checklist_item`
--

INSERT INTO `checklist_item` (`id`, `item_name`, `checklist_id`, `is_checked`, `created_at`, `updated_at`) VALUES
(1, 'Item Name 1 editted 2', 1, 1, '2024-10-16 10:40:09', '2024-10-16 10:47:34'),
(2, 'Item Name 2', 1, 0, '2024-10-16 10:40:21', '2024-10-16 10:40:21');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'user1', 'user1@example.com', 'password', '2024-10-16 09:12:23', '2024-10-16 09:12:23'),
(2, 'user2', 'user2@example.com', '$2a$10$QrGkmFGNzUSxX8tbfm53V.JMAcHGdeTNq1V6H4dvfxuXDWh0OfQvS', '2024-10-16 09:19:32', '2024-10-16 09:19:32'),
(3, 'user2', 'user2@example.com', '$2a$10$BCfRTH1L.6ReCyoQbBAL9euB4zP00WbUOVpTNL7PjLXYe67iFxiTO', '2024-10-16 09:24:09', '2024-10-16 09:24:09'),
(4, 'user4', 'user4@example.com', '$2a$10$kDe0nsT79dVH0pbKrXcmXePLGEHVUYfsRfGDofsBg..qFgg2YUBBq', '2024-10-16 09:24:36', '2024-10-16 09:24:36'),
(5, 'user5', 'user5@example.com', '$2a$10$kUR0vOoz9fMWpZt.eDZiFOWzBz0hynl0eb/kblbIHLJ.zT2j1OEvK', '2024-10-16 11:03:36', '2024-10-16 11:03:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `checklist`
--
ALTER TABLE `checklist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `checklist_item`
--
ALTER TABLE `checklist_item`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `checklist`
--
ALTER TABLE `checklist`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `checklist_item`
--
ALTER TABLE `checklist_item`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
