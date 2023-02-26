USE [comfortyEcommerce]
GO
CREATE PROCEDURE DeleteProduct
@id VARCHAR(255)
AS
BEGIN
    UPDATE products
    SET is_deleted = 1
    WHERE id = @id
    SELECT * FROM products WHERE id = @id
END

