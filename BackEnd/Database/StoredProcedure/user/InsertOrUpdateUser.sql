USE [comfortyEcommerce]
GO

CREATE PROCEDURE InsertOrUpdateUser
@id VARCHAR(255),
@email VARCHAR(255),
@password VARCHAR(255),
@phone VARCHAR(255),
@is_admin BIT,
@is_deleted BIT,
@is_sent BIT,
@created_at DATETIME
AS
BEGIN
    IF EXISTS (SELECT * FROM Users WHERE id = @id) 
    BEGIN
        UPDATE Users SET email = @email, password = @password, phone = @phone, is_admin = @is_admin, is_deleted = @is_deleted, is_sent = @is_sent ,created_at = @created_at WHERE id = @id
        SELECT * FROM Users WHERE id = @id
    END
    ELSE
    BEGIN
        INSERT INTO Users (id, email, password, phone) VALUES (@id, @email, @password, @phone)
        SELECT * FROM Users WHERE id = @id
    END
END


