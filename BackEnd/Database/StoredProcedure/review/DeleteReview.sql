USE [comfortyEcommerce]
GO
CREATE PROCEDURE DeleteReview
@id VARCHAR(255)
AS
BEGIN
    UPDATE reviews SET is_deleted = 1 WHERE id = @id
    SELECT * FROM reviews WHERE id = @id
END

