CREATE DATABASE everGreens
GO
USE [everGreens]
GO
CREATE TABLE Categories (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_top_level BIT NOT NULL DEFAULT 0,
    CHECK (name <> ''),
    CHECK (is_top_level IN (0,1)),
    UNIQUE (name)
);

