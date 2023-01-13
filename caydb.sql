-- phpMyAdmin SQL Dump
-- version 5.3.0-dev+20220825.811789df3c
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th1 13, 2023 lúc 05:00 AM
-- Phiên bản máy phục vụ: 10.4.24-MariaDB
-- Phiên bản PHP: 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `caydb`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admin`
--

CREATE TABLE `admin` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `admin`
--

INSERT INTO `admin` (`id`, `name`, `password`, `created_at`, `updated_at`) VALUES
(1, 'admin', '$2y$10$AHlBG8o28AP3d22tvFhPLeAhy8rs6hUyuWP/dYgYFP3sNh9SACH1.', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `contact`
--

CREATE TABLE `contact` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `phone_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `facebook` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `instagram` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `contact`
--

INSERT INTO `contact` (`id`, `phone_number`, `email`, `facebook`, `instagram`, `address`, `created_at`, `updated_at`) VALUES
(1, '+84 (0) 7 6666 0952', 'caystudio.contact@gmail.com', 'https://www.facebook.com/CAYYYYYYYY.studio', 'https://www.instagram.com/cay.stu/', '46/10A Dũng Sĩ Thanh Khê, Thanh Khe Tay, Đà Nẵng', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `footer`
--

CREATE TABLE `footer` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone_number` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebook` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `instagram` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `footer`
--

INSERT INTO `footer` (`id`, `name`, `address`, `phone_number`, `email`, `facebook`, `instagram`, `created_at`, `updated_at`) VALUES
(1, 'CAY studio', '46/10A Dung Si Thanh Khe St.Thanh Khe Tay, Da Nang 550000', '+84 (0) 7 6666 0952', 'caystudio.contact@gmail.com', 'https://www.facebook.com/CAYYYYYYYY.studio', 'https://www.instagram.com/cay.stu', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `guide`
--

CREATE TABLE `guide` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `rent_cost` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deposit_cost` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deposit_information` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `qr_image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link_fb` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `img_studio` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `guide`
--

INSERT INTO `guide` (`id`, `rent_cost`, `deposit_cost`, `deposit_information`, `qr_image`, `link_fb`, `img_studio`, `created_at`, `updated_at`) VALUES
(1, '250.000', '100.000', '07 772 552 752 Nguyễn Minh Đức', 'https://i.pinimg.com/564x/60/c1/4a/60c14a43fb4745795b3b358868517e79.jpg', 'https://www.facebook.com/CAYYYYYYYY.studio', 'https://anlocgroup.com/wp-content/uploads/2020/09/thiet-ke-can-ho-30m2-voi-noi-that-thong-minh-1.jpg', NULL, '2023-01-12 04:38:39');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `guide_list`
--

CREATE TABLE `guide_list` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `item` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `guide_list`
--

INSERT INTO `guide_list` (`id`, `item`, `created_at`, `updated_at`) VALUES
(1, 'Trigger xlx (x1 pce)', NULL, NULL),
(2, 'mirror', '2023-01-12 04:38:52', '2023-01-12 04:38:52');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `header`
--

CREATE TABLE `header` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `logo_img` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `logo_name` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `header`
--

INSERT INTO `header` (`id`, `logo_img`, `logo_name`, `created_at`, `updated_at`) VALUES
(1, 'https://f20-zpc.zdn.vn/8091633100929075728/fb8664ebd91a0144580b.jpg', 'CAY STUDIO', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `home`
--

CREATE TABLE `home` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title1` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description1` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtitle1` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `background1` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description2` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `background2` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imgAbout` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descriptionAbout` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `home`
--

INSERT INTO `home` (`id`, `title1`, `description1`, `subtitle1`, `background1`, `description2`, `background2`, `imgAbout`, `descriptionAbout`, `created_at`, `updated_at`) VALUES
(1, 'CREATIVE FORM IN OUR DESIGN', 'Our agents are engaged and experienced in the Miami real\r\n                estate market and well informed about the communities\r\n                they services.', 'CAY STUDIO', 'https://images.unsplash.com/photo-1574025876844-6c9ba8602866?fbclid=IwAR10qZlgVvgH7d8Uz9Etry8ArlLliQEkGshvt29NOJZbjYT_kCr6xhCDxi0', 'A news article discusses current or recent news of either general interest or of a specific topic', 'https://images.unsplash.com/photo-1608324777753-5d2f6e547b1b', 'https://images.unsplash.com/photo-1608324777753-5d2f6e547b1b', 'Test Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an', NULL, '2023-01-12 20:59:35');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `images`
--

CREATE TABLE `images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `portfolio_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `images`
--

INSERT INTO `images` (`id`, `image`, `portfolio_id`, `created_at`, `updated_at`) VALUES
(3, 'https://images.unsplash.com/photo-1673463825715-b5b2be0eb244?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', 7, '2023-01-12 04:06:12', '2023-01-12 04:06:12'),
(4, 'https://media.istockphoto.com/id/1295707411/photo/close-up-of-couple-holding-hands.jpg?b=1&s=170667a&w=0&k=20&c=yO0VmMaU4VEQC3pafIFED8OdCF08COBkCJvax8WDCvw=', 8, '2023-01-12 04:07:00', '2023-01-12 04:07:00'),
(5, 'https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o=', 9, '2023-01-12 04:08:01', '2023-01-12 04:08:01'),
(6, 'https://plus.unsplash.com/premium_photo-1668208365386-4198381c6f6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60', 10, '2023-01-12 04:08:37', '2023-01-12 04:08:37'),
(7, 'https://images.unsplash.com/photo-1567201864585-6baec9110dac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60', 11, '2023-01-12 04:09:24', '2023-01-12 04:09:24'),
(8, 'https://images.unsplash.com/photo-1596367407372-96cb88503db6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2hpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60', 12, '2023-01-12 04:09:43', '2023-01-12 04:09:43'),
(9, 'https://plus.unsplash.com/premium_photo-1670659216602-684851553bc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2hpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60', 13, '2023-01-12 04:10:06', '2023-01-12 04:10:06'),
(10, 'https://images.unsplash.com/photo-1583339824000-5afecfd41835?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2hpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60', 14, '2023-01-12 04:11:28', '2023-01-12 04:11:28');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(2, '2022_12_04_071452_header', 1),
(3, '2022_12_04_072107_footer', 1),
(4, '2022_12_06_134609_create_admin_table', 1),
(5, '2022_12_09_102415_create_home_table', 1),
(6, '2022_12_10_045231_create_guide_table', 1),
(7, '2022_12_10_045800_create_guide_list_table', 1),
(8, '2022_12_14_030435_create_contact_table', 1),
(9, '2022_12_16_043101_create_schedule_table', 1),
(10, '2022_12_27_123339_create_portfolio_table', 1),
(11, '2022_12_27_123355_creat_images_table', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\Admin', 1, 'auth-token', '4c90c69af10588c60d8a6e0b182ab61ef3beb0ac5207f14f014cd9f6bbaa70fc', '[\"*\"]', NULL, NULL, '2023-01-12 04:12:40', '2023-01-12 04:12:40');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `portfolio`
--

CREATE TABLE `portfolio` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_album` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnails` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `portfolio`
--

INSERT INTO `portfolio` (`id`, `name_album`, `category`, `thumbnails`, `created_at`, `updated_at`) VALUES
(7, 'new 123', 'bake', 'https://images.unsplash.com/photo-1673463825715-b5b2be0eb244?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', '2023-01-12 04:06:12', '2023-01-12 04:06:12'),
(8, 'wedding', 'wedding', 'https://media.istockphoto.com/id/1295707411/photo/close-up-of-couple-holding-hands.jpg?b=1&s=170667a&w=0&k=20&c=yO0VmMaU4VEQC3pafIFED8OdCF08COBkCJvax8WDCvw=', '2023-01-12 04:07:00', '2023-01-12 04:07:00'),
(9, 'pet', 'animal', 'https://media.istockphoto.com/id/1328887289/photo/happy-dog.jpg?b=1&s=170667a&w=0&k=20&c=mp3L73BC14QUuk1EQaYtZ1-wwJRW9HAffcsGZNyMy_o=', '2023-01-12 04:08:01', '2023-01-12 04:08:01'),
(10, 'dogg', 'pet', 'https://plus.unsplash.com/premium_photo-1668208365386-4198381c6f6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60', '2023-01-12 04:08:37', '2023-01-12 04:08:37'),
(11, 'space', 'space', 'https://images.unsplash.com/photo-1567201864585-6baec9110dac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60', '2023-01-12 04:09:24', '2023-01-12 04:09:24'),
(12, 'sky', 'sky', 'https://images.unsplash.com/photo-1596367407372-96cb88503db6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2hpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60', '2023-01-12 04:09:43', '2023-01-12 04:09:43'),
(13, 'new', 'space', 'https://plus.unsplash.com/premium_photo-1670659216602-684851553bc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2hpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60', '2023-01-12 04:10:06', '2023-01-12 04:10:06'),
(14, 'special things', 'space', 'https://images.unsplash.com/photo-1583339824000-5afecfd41835?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2hpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60', '2023-01-12 04:11:28', '2023-01-12 04:11:28');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `schedule`
--

CREATE TABLE `schedule` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `birthday` date DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `note` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL,
  `created_at` datetime NOT NULL,
  `approval` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `schedule`
--

INSERT INTO `schedule` (`id`, `title`, `phone`, `birthday`, `email`, `note`, `start`, `end`, `created_at`, `approval`) VALUES
(1, 'vui qua di', '09090909090', '2017-10-01', NULL, NULL, '2023-01-16 11:12:00', '2023-01-16 12:12:00', '2023-01-16 00:00:00', 1),
(3, 'Khang', '0941383765', '2003-01-09', NULL, NULL, '2023-01-12 09:30:00', '2023-01-12 10:30:00', '2023-01-12 00:00:00', 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `footer`
--
ALTER TABLE `footer`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `guide`
--
ALTER TABLE `guide`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `guide_list`
--
ALTER TABLE `guide_list`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `header`
--
ALTER TABLE `header`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `home`
--
ALTER TABLE `home`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Chỉ mục cho bảng `portfolio`
--
ALTER TABLE `portfolio`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `admin`
--
ALTER TABLE `admin`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `contact`
--
ALTER TABLE `contact`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `footer`
--
ALTER TABLE `footer`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `guide`
--
ALTER TABLE `guide`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `guide_list`
--
ALTER TABLE `guide_list`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `header`
--
ALTER TABLE `header`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `home`
--
ALTER TABLE `home`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `images`
--
ALTER TABLE `images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `portfolio`
--
ALTER TABLE `portfolio`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `schedule`
--
ALTER TABLE `schedule`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
