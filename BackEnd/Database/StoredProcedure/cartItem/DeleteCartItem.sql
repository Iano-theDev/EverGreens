
USE [everGreens]
GO

CREATE PROCEDURE DeleteCartItem
    @id VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;
    DELETE FROM Cart_items WHERE id = @id;
END
