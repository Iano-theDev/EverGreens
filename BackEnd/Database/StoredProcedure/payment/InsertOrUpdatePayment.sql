USE [comfortyEcommerce]
GO
CREATE PROCEDURE InsertOrUpdatePayment
@id VARCHAR(255),
@user_id VARCHAR(255),
@order_id VARCHAR(255),
@amount DECIMAL(10,2),
@payment_method_id VARCHAR(255)
AS
BEGIN
    IF EXISTS (SELECT * FROM payments WHERE id = @id)
    BEGIN
        UPDATE payments SET user_id = @user_id, order_id = @order_id, amount = @amount, payment_method_id = @payment_method_id WHERE id = @id
        SELECT * FROM payments WHERE id = @id
    END
    ELSE
    BEGIN
        INSERT INTO payments (id, user_id, order_id, amount, payment_method_id) VALUES (@id, @user_id, @order_id, @amount, @payment_method_id)
        SELECT * FROM payments WHERE id = @id
    END
END