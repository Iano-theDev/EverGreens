
USE [comfortyEcommerce]
GO
CREATE PROCEDURE GetUserByEmail
@email VARCHAR(255)
AS
BEGIN
    SELECT * FROM Users WHERE email = @email
END