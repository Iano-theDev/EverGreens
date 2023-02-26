
-- CREATE TABLE Payment_methods (
--     id VARCHAR(255) PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     description VARCHAR(255) NOT NULL,
--     CHECK (name <> ''),
--     CHECK (description <> ''),
-- );


-- create stored procedure to get payment method by id
USE [comfortyEcommerce]
GO

CREATE PROCEDURE getPaymentMethodById
    @id VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;
    SELECT * FROM Payment_methods WHERE id = @id;
END

