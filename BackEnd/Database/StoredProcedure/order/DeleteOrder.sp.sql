USE [comfortyEcommerce]
GO
CREATE PROCEDURE DeleteOrder
@id VARCHAR(255)
AS
BEGIN
    DELETE FROM orders
    WHERE id = @id
    SELECT * FROM orders WHERE id = @id
END


