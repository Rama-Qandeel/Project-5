-- write the database name that you use here
USE db_name;

-- create database project_5;-- 
-- use project_5 
CREATE table productCategory(
categoryId int  NOT NULL ,
categoryName varchar(55),
picture varchar(255) ,
PRIMARY key (categoryId)
);
-- drop table productCategory;

CREATE table products(
productId int AUTO_INCREMENT NOT NULL ,
categoryId int ,
storeId int ,
productName varchar(25),
productDescripition varchar(255),
quantityPerUnit varchar(100),
unitPrice int,
availableProduct Boolean ,
discountAvailable varchar(20),
picture varchar(255),
is_deleted  BIT NOT NULL DEFAULT 0,
PRIMARY key (productId),
FOREIGN KEY (storeId) REFERENCES store(storeId),
FOREIGN KEY (categoryId) REFERENCES productCategory(categoryId)
);

CREATE table storeCategory (
storeCategoryId int AUTO_INCREMENT NOT NULL,
categoryName varchar(55),
PRIMARY KEY (storeCategoryId)
);

CREATE table store (
        storeId int AUTO_INCREMENT NOT NULL,
        userId int,
        storeCategory varchar(55),
        storeName varchar(55),
        storePic varchar(255),
        is_deleted BIT NOT NULL DEFAULT 0,
        PRIMARY KEY (storeId)
        );










-- *********************************


CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
   
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT NOT NULL,
   
    PRIMARY KEY (id)
);

-- example:
CREATE TABLE products (
    id INT AUTO_INCREMENT NOT NULL,
   
    PRIMARY KEY (id)
);