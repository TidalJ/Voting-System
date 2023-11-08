SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `articleId` int(11) NOT NULL AUTO_INCREMENT COMMENT 'investigate the ID of the article',
  `userId` int(11) NOT NULL COMMENT 'userId',
  `content` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NULL DEFAULT NULL COMMENT 'contents of the vote',
  `options` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL COMMENT 'voting options',
  `time` datetime NOT NULL COMMENT 'release time',
  `title` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL COMMENT 'title',
  `articleCount` int(10) NOT NULL COMMENT 'the number of participants',
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
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'userid',
  `username` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL COMMENT 'username',
  `password` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL COMMENT 'password',
  `sex` enum('male','female') CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL DEFAULT 'male' COMMENT 'gender',
  `avatar` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL COMMENT 'avatar',
  `count` int(11) NOT NULL DEFAULT 0 COMMENT 'questions answered by users and posted questions(status)',
  `voteCount` int(11) NOT NULL DEFAULT 0 COMMENT 'number of surveys',
  `answerCount` int(11) NOT NULL DEFAULT 0 COMMENT 'number of answers',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for vote
-- ----------------------------
DROP TABLE IF EXISTS `vote`;
CREATE TABLE `vote`  (
  `voteId` int(11) NOT NULL AUTO_INCREMENT COMMENT 'votingid',
  `articleId` int(11) NOT NULL COMMENT 'surveyid',
  `userId` int(11) NOT NULL COMMENT 'userid',
  `option` varchar(255) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL COMMENT 'option',
  PRIMARY KEY (`voteId`, `articleId`, `userId`) USING BTREE,
  INDEX `articleId`(`articleId`) USING BTREE,
  INDEX `userId`(`userId`) USING BTREE,
  CONSTRAINT `vote_ibfk_1` FOREIGN KEY (`articleId`) REFERENCES `article` (`articleId`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `vote_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Compact;

SET FOREIGN_KEY_CHECKS = 1;
