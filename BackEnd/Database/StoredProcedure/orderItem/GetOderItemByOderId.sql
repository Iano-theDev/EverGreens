USE [comfortyEcommerce]
GO
CREATE PROCEDURE GetOderItemByOderId
@order_id VARCHAR(255)
AS
BEGIN
    SELECT * FROM order_items WHERE order_id = @order_id
END
