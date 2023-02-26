USE [comfortyEcommerce]
GO
CREATE PROCEDURE GetOrderById
@id VARCHAR(255)
AS
BEGIN
    SELECT * FROM orders WHERE id = @id
END

