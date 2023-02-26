USE [comfortyEcommerce]
GO
CREATE PROCEDURE InsertOrUpdateReview
@id VARCHAR(255),
@user_id VARCHAR(255),
@product_id VARCHAR(255),
@rating INTEGER,
@review VARCHAR(255),
@is_deleted BIT,
@created_at DATE
AS
BEGIN
    IF EXISTS (SELECT * FROM reviews WHERE id = @id)
    BEGIN
        UPDATE reviews SET user_id = @user_id, product_id = @product_id, rating = @rating, review = @review, is_deleted = @is_deleted, created_at = @created_at WHERE id = @id
        SELECT * FROM reviews WHERE id = @id
    END
    ELSE
    BEGIN
        INSERT INTO reviews (id, user_id, product_id, rating, review, is_deleted, created_at) VALUES (@id, @user_id, @product_id, @rating, @review, @is_deleted, @created_at)
        SELECT * FROM reviews WHERE id = @id
    END
END