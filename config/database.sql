CREATE DATABASE IF NOT EXISTS `agricultureDatabase`;
ALTER DATABASE `agricultureDatabase` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `pots` (
  `potID` VARCHAR(50) NOT NULL,
  `note` VARCHAR(200),
  PRIMARY KEY (`potID`)
);

CREATE TABLE `enviromentControl` (
  `enviromentID` INT(20) NOT NULL AUTO_INCREMENT,
  `potID` VARCHAR(50) NOT NULL,
  `humidityOut` FLOAT(3,2) NOT NULL,
  `humidityIn` INT(3) NOT NULL,
  `temperature` FLOAT(3,2) NOT NULL,
  `time` DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY (`enviromentID`, `potID`),
  CONSTRAINT fk_enviromentControl_potID FOREIGN KEY(`potID`) REFERENCES `pots`(`potID`)
);

DELIMITER $$
CREATE PROCEDURE insertAgriculterControl(potID VARCHAR(50), humidityOut FLOAT(3,2), humidityIn INT(3), temperature FLOAT(3,2))
BEGIN 
  START TRANSACTION;
  INSERT INTO `enviromentControl` VALUES(NULL, potID, humidityOut, humidityIn, temperature, CURRENT_TIMESTAMP);
  COMMIT;
END;
 $$
DELIMITER ;