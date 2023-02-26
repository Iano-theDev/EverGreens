USE [comfortyEcommerce]
GO
CREATE PROCEDURE InsertOrUpdateOrder
@id VARCHAR(255),
@user_id VARCHAR(255),
@created_at DATE,
@is_paid BIT,
@is_delivered BIT,
@amount DECIMAL(10,2)
AS
BEGIN
    IF EXISTS (SELECT * FROM orders WHERE id = @id)
    BEGIN
        UPDATE orders SET user_id = @user_id, created_at = @created_at, is_paid = @is_paid, is_delivered = @is_delivered, amount = @amount WHERE id = @id
        SELECT * FROM orders WHERE id = @id
    END
    ELSE
    BEGIN
        INSERT INTO orders (id, user_id, created_at, is_paid, is_delivered, amount) VALUES (@id, @user_id, @created_at, @is_paid, @is_delivered, @amount)
        SELECT * FROM orders WHERE id = @id
    END
END