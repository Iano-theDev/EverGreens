-- CREATE TABLE Payment_methods (
--     id VARCHAR(255) PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     description VARCHAR(255) NOT NULL,
--     CHECK (name <> ''),
--     CHECK (description <> ''),
-- );


-- create stored procedure to get all payment method


USE [comfortyEcommerce]
GO

CREATE PROCEDURE getAllpaymentMethod
AS
BEGIN
    SET NOCOUNT ON;
    SELECT * FROM Payment_methods;
END
