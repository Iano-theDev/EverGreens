
USE [comfortyEcommerce]
GO
CREATE PROCEDURE GetUserById
@id VARCHAR(255)
AS
BEGIN
    SELECT * FROM users WHERE id = @id
END