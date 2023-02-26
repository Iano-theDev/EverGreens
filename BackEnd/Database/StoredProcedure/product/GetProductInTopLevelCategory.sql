USE [comfortyEcommerce]
GO
CREATE PROCEDURE GetProductInTopLevelCategory
AS
BEGIN
    SELECT * FROM products WHERE category_id IN (SELECT id FROM Categories WHERE is_top_level = 1)
END