USE [everGreens]
GO
CREATE PROCEDURE InsertOrUpdateOrderItem
@id VARCHAR(255),
@order_id VARCHAR(255),
@product_id VARCHAR(255),
@quantity INTEGER
AS
BEGIN
    IF EXISTS (SELECT * FROM Order_items WHERE id = @id)
    BEGIN
        UPDATE order_item SET
            order_id = @order_id,
            product_id = @product_id,
            quantity = @quantity
        WHERE id = @id
        SELECT * FROM Order_items WHERE id = @id
    END
    ELSE
    BEGIN
        INSERT INTO Order_items (id, order_id, product_id, quantity)
        VALUES (@id, @order_id, @product_id, @quantity)
        SELECT * FROM Order_items WHERE id = @id
    END

END


DROP PROCEDURE InsertOrUpdateOrderItem


