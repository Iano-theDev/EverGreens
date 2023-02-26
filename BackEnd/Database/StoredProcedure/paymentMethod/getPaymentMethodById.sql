
USE [everGreens]
GO

CREATE PROCEDURE getPaymentMethodById
    @id VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;
    SELECT * FROM Payment_methods WHERE id = @id;
END

