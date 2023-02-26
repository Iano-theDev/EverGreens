USE [comfortyEcommerce]
GO
CREATE PROCEDURE InsertOrUpdateCartItem
    @id VARCHAR(255),
    @user_id VARCHAR(255),
    @product_id VARCHAR(255),
    @quantity INTEGER
AS
BEGIN
  
    IF EXISTS (SELECT * FROM Cart_items WHERE user_id = @user_id AND product_id = @product_id)
    BEGIN
        UPDATE Cart_items SET quantity = quantity + @quantity WHERE user_id = @user_id AND product_id = @product_id;
        SELECT * FROM Cart_items WHERE user_id = @user_id AND product_id = @product_id;
 
    END
    ELSE
    BEGIN
        INSERT INTO Cart_items (id, user_id, product_id, quantity) VALUES (@id, @user_id, @product_id, @quantity);
        SELECT * FROM Cart_items WHERE id = @id;
    END
    END




DELETE products WHERE id = '72836104-8256-4264-aa67-0c024aaa62d3'
