USE [comfortyEcommerce]
GO
CREATE PROCEDURE GetProductById
@id VARCHAR(255)
AS
BEGIN
    SELECT * FROM products WHERE id = @id
END