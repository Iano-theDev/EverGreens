USE [comfortyEcommerce]
GO
CREATE PROCEDURE GetCartItemByUserId
    @user_id VARCHAR(255)

AS
BEGIN
    SET NOCOUNT ON;
    SELECT * FROM Cart_items WHERE user_id = @user_id;
END