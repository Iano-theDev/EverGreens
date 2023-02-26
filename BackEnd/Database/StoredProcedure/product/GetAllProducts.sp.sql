USE [comfortyEcommerce]
GO
CREATE PROCEDURE GetAllProducts
AS
BEGIN
    SELECT * FROM products
END