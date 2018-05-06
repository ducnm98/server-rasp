CREATE DATABASE IF NOT EXISTS `argiculterDatabase`;
ALTER DATABASE `argiculterDatabase` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `pots` (
  `potID` VARCHAR(50) NOT NULL,
  `note` VARCHAR(200),
  PRIMARY KEY (`potID`)
);

CREATE TABLE `enviromentControl` (
  `enviromentID` INT(20) NOT NULL AUTO_INCREMENT,
  `potID` VARCHAR(50) NOT NULL,
  `temperatureOut` FLOAT(3,2) NOT NULL,
  `temperatureIn` FLOAT(2,2) NOT NULL,
  `humidity` INT(3) NOT NULL,
  `time` DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY (`enviromentID`, `potID`),
  CONSTRAINT fk_enviromentControl_potID FOREIGN KEY(`potID`) REFERENCES `pots`(`potID`)
);

DELIMITER $$
CREATE PROCEDURE insertAgriculterControl(potID VARCHAR(50), temperatureOut FLOAT(3,2), temperatureIn FLOAT(3,2), humidity INT(3))
BEGIN 
  START TRANSACTION;
  INSERT INTO `enviromentControl` VALUES(NULL, potID, temperatureOut, temperatureIn, humidity, CURRENT_TIMESTAMP);
  COMMIT;
END;
 $$
DELIMITER ;