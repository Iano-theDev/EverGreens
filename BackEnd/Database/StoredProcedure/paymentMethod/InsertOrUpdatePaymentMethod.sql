USE [comfortyEcommerce]
GO
CREATE PROCEDURE InsertOrUpdatePaymentMethod
@id VARCHAR(255),
@name VARCHAR(255),
@description VARCHAR(255)
AS
BEGIN
    IF EXISTS (SELECT * FROM payment_methods WHERE id = @id)
    BEGIN
        UPDATE payment_methods SET name = @name, description = @description WHERE id = @id
        SELECT * FROM payment_methods WHERE id = @id
    END
    ELSE
    BEGIN
        INSERT INTO payment_methods (id, name, description) VALUES (@id, @name, @description)
        SELECT * FROM payment_methods WHERE id = @id
    END
END