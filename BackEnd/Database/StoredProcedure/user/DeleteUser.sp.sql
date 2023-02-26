
USE [comfortyEcommerce]
GO
CREATE PROCEDURE DeleteUser
    @id VARCHAR(255)
AS
BEGIN
    UPDATE Users
    SET is_deleted = 1
    WHERE id = @id
END