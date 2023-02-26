USE [comfortyEcommerce]
GO
CREATE PROCEDURE GetReviewByProductId
@product_id VARCHAR(255)
AS
BEGIN
    SELECT * FROM reviews WHERE product_id = @product_id
END
