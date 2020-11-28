-- write the database name that you use here
USE db_name;

-- create database project_5;-- 
-- use project_5 


--store
CREATE table store_category (
store_categoryId int AUTO_INCREMENT NOT NULL,
categoryName varchar(55),
PRIMARY KEY (store_categoryId)
);

CREATE table store (
        store_id int AUTO_INCREMENT NOT NULL,
        user_id int,
        store_category varchar(55),
        store_name varchar(55),
        store_pic varchar(255),
        is_deleted BIT NOT NULL DEFAULT 0,
        PRIMARY KEY (store_id)
        );
--product 
CREATE table productCategory(
category_id int  NOT NULL ,
category_name varchar(55),
picture varchar(255) ,
PRIMARY key (categoryId)
);
CREATE table products(
product_id int AUTO_INCREMENT NOT NULL ,
category_id int ,
store_id int ,
product_name varchar(255),
product_descripition varchar(255),
quantity_per_unit varchar(100),
unit_price int,
available_product Boolean ,
discount_available varchar(20),
picture varchar(255),
is_deleted  BIT NOT NULL DEFAULT 0,
PRIMARY key (product_id),
FOREIGN KEY (store_id) REFERENCES store(store_id),
FOREIGN KEY (category_id) REFERENCES productCategory(category_id)
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