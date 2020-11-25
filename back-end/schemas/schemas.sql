CREATE SCHEMA IF NOT EXISTS `market` DEFAULT CHARACTER SET utf8;

USE `market`;

-- -----------------------------------------------------
-- Table `market`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `market`.`role` (
    `roleId` INT NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`roleId`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `market`.`store`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `market`.`store` (
    `storeId` INT NOT NULL AUTO_INCREMENT,
    `storeName` VARCHAR(45) NOT NULL,
    `is_deleted` TINYINT(1) NOT NULL,
    `picture` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`storeId`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `market`.`payment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `market`.`payment` (
    `paymentId` INT NOT NULL AUTO_INCREMENT,
    `paymentType` VARCHAR(45) NOT NULL,
    `creditCard` VARCHAR(45) NOT NULL,
    `creditCardTypeId` VARCHAR(45) NOT NULL,
    `creditExp` VARCHAR(45) NOT NULL,
    `is_deleted` TINYINT(1) NOT NULL,
    PRIMARY KEY (`paymentId`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `market`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `market`.`users` (
    `userId` INT NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(100) NOT NULL,
    `lastName` VARCHAR(100) NOT NULL,
    `birthDate` DATE NOT NULL,
    `address` VARCHAR(100) NOT NULL,
    `city` VARCHAR(100) NOT NULL,
    `region` VARCHAR(100) NOT NULL,
    `phoneNumber` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `imageProfile` VARCHAR(255) NOT NULL,
    `roleId` INT NOT NULL,
    `storeId` INT NOT NULL,
    `paymentId` INT NOT NULL,
    `is_deleted` TINYINT(1) NOT NULL DEFAULT 0,
    PRIMARY KEY (`userId`),
    CONSTRAINT `fk_users_role1` FOREIGN KEY (`roleId`) REFERENCES `market`.`role` (`roleId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT `fk_users_store1` FOREIGN KEY (`storeId`) REFERENCES `market`.`store` (`storeId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT `fk_users_payment1` FOREIGN KEY (`paymentId`) REFERENCES `market`.`payment` (`paymentId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `market`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `market`.`orders` (
    `ordersId` INT NOT NULL AUTO_INCREMENT,
    `is_deleted` TINYINT(1) NOT NULL DEFAULT 0,
    `userId` INT NOT NULL,
    `storeId` INT NOT NULL,
    `delivaryId` INT NOT NULL,
    PRIMARY KEY (`ordersId`),
    CONSTRAINT `fk_orders_users1` FOREIGN KEY (`userId`) REFERENCES `market`.`users` (`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT `fk_orders_store1` FOREIGN KEY (`storeId`) REFERENCES `market`.`store` (`storeId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT `fk_orders_users2` FOREIGN KEY (`delivaryId`) REFERENCES `market`.`users` (`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `market`.`productCategory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `market`.`productCategory` (
    `categoryId` INT NOT NULL AUTO_INCREMENT,
    `categoryName` VARCHAR(45) NOT NULL,
    `picture` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`categoryId`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `market`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `market`.`products` (
    `productId` INT NOT NULL AUTO_INCREMENT,
    `productName` VARCHAR(45) NOT NULL,
    `productDescripition` VARCHAR(45) NOT NULL,
    `quantityPerUnit` VARCHAR(45) NOT NULL,
    `unitPrice` INT NOT NULL,
    `availbleProduct` VARCHAR(45) NOT NULL,
    `discount` INT NOT NULL,
    `discountAvailable` VARCHAR(45) NOT NULL,
    `picture` VARCHAR(45) NOT NULL,
    `is_deleted` TINYINT(1) NOT NULL DEFAULT 0,
    `categoryId` INT NOT NULL,
    `storeId` INT NOT NULL,
    PRIMARY KEY (`productId`),
    CONSTRAINT `fk_products_productCategory1` FOREIGN KEY (`categoryId`) REFERENCES `market`.`productCategory` (`categoryId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT `fk_products_store1` FOREIGN KEY (`storeId`) REFERENCES `market`.`store` (`storeId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `market`.`items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `market`.`items` (
    `itemId` INT NOT NULL AUTO_INCREMENT,
    `quantity` VARCHAR(45) NOT NULL,
    `totalPrice` VARCHAR(45) NOT NULL,
    `is_deleted` TINYINT(1) GENERATED ALWAYS AS (0) VIRTUAL,
    `productId` INT NOT NULL,
    `ordersId` INT NOT NULL,
    PRIMARY KEY (`itemId`),
    CONSTRAINT `fk_items_products1` FOREIGN KEY (`productId`) REFERENCES `market`.`products` (`productId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT `fk_items_orders1` FOREIGN KEY (`ordersId`) REFERENCES `market`.`orders` (`ordersId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;