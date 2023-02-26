-- CREATE TABLE Cart_items (
--     id VARCHAR(255) PRIMARY KEY,
--     user_id VARCHAR(255) NOT NULL,
--     product_id VARCHAR(255) NOT NULL,
--     quantity INTEGER NOT NULL,
--     CHECK (quantity > 0),
--     FOREIGN KEY (user_id) REFERENCES Users(id),
--     FOREIGN KEY (product_id) REFERENCES Products(id),
-- );



-- create stored procedure to delete cart item

USE [comfortyEcommerce]
GO

CREATE PROCEDURE DeleteCartItem
    @id VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;
    DELETE FROM Cart_items WHERE id = @id;
END
