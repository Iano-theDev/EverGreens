USE [comfortyEcommerce]
GO
CREATE PROCEDURE GetCategoryByName
@name VARCHAR(255)
AS
BEGIN
    SELECT * FROM categories WHERE name = @name
END

