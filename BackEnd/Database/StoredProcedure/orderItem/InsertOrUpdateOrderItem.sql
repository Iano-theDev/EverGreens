USE [comfortyEcommerce]
GO
CREATE PROCEDURE InsertOrUpdateOrderItem
@id VARCHAR(255),
@order_id VARCHAR(255),
@product_id VARCHAR(255),
@quantity INTEGER
AS
BEGIN
    IF EXISTS (SELECT * FROM order_item WHERE id = @id)
    BEGIN
        UPDATE order_item SET
            order_id = @order_id,
            product_id = @product_id,
            quantity = @quantity
        WHERE id = @id
    END
    ELSE
    BEGIN
        INSERT INTO order_item (id, order_id, product_id, quantity)
        VALUES (@id, @order_id, @product_id, @quantity)
    END

END

