USE [comfortyEcommerce]
GO
CREATE PROCEDURE GetOrdersByUserId
@user_id VARCHAR(255)
AS
BEGIN
    SELECT * FROM orders WHERE user_id = @user_id
END

