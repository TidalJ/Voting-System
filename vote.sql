/*
 Navicat Premium Data Transfer

 Source Server         : 本地
 Source Server Type    : MySQL
 Source Server Version : 50550
 Source Host           : localhost:3306
 Source Schema         : vote

 Target Server Type    : MySQL
 Target Server Version : 50550
 File Encoding         : 65001

 Date: 07/11/2023 21:27:04
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `articleId` int(11) NOT NULL AUTO_INCREMENT COMMENT '调查文章的Id',
  `userId` int(11) NOT NULL COMMENT '用户Id',
  `content` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL COMMENT '投票的内容',
  `options` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL COMMENT '投票的可选项',
  `time` datetime NOT NULL COMMENT '发布时间',
  `title` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL COMMENT '标题',
  `articleCount` int(10) NOT NULL COMMENT '参与人数',
  PRIMARY KEY (`articleId`, `userId`) USING BTREE,
  INDEX `userId`(`userId`) USING BTREE,
  INDEX `articleId`(`articleId`) USING BTREE,
  CONSTRAINT `article_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `username` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL COMMENT '密码',
  `sex` enum('male','female') CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL DEFAULT 'male' COMMENT '性别',
  `avatar` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL COMMENT '用户头像',
  `count` int(11) NOT NULL DEFAULT 0 COMMENT '用户回答的问题与发布的问题和(地位)',
  `voteCount` int(11) NOT NULL DEFAULT 0 COMMENT '调查数量',
  `answerCount` int(11) NOT NULL DEFAULT 0 COMMENT '回答数量',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for vote
-- ----------------------------
DROP TABLE IF EXISTS `vote`;
CREATE TABLE `vote`  (
  `voteId` int(11) NOT NULL AUTO_INCREMENT COMMENT '投票Id',
  `articleId` int(11) NOT NULL COMMENT '调查Id',
  `userId` int(11) NOT NULL COMMENT '用户Id',
  `option` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL COMMENT '选择的投票',
  PRIMARY KEY (`voteId`, `articleId`, `userId`) USING BTREE,
  INDEX `articleId`(`articleId`) USING BTREE,
  INDEX `userId`(`userId`) USING BTREE,
  CONSTRAINT `vote_ibfk_1` FOREIGN KEY (`articleId`) REFERENCES `article` (`articleId`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `vote_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Compact;

SET FOREIGN_KEY_CHECKS = 1;
