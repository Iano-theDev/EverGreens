

USE [everGreens]
GO

CREATE PROCEDURE getAllpaymentMethod
AS
BEGIN
    SET NOCOUNT ON;
    SELECT * FROM Payment_methods;
END
