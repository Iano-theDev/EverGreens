USE [comfortyEcommerce]
GO
CREATE PROCEDURE RemoveOrReduceQuantity
    @id VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;
    IF EXISTS (SELECT * FROM Cart_items WHERE id = @id AND quantity > 1)
    BEGIN
        UPDATE Cart_items SET quantity = quantity - 1 WHERE id = @id;
        SELECT * FROM Cart_items WHERE id = @id;
    END
    ELSE
    BEGIN
        DELETE FROM Cart_items WHERE id = @id;
    END
END


