USE [comfortyEcommerce]
GO
CREATE PROCEDURE InsertOrUpdateCategory
@id VARCHAR(255),
@name VARCHAR(255),
@is_top_level BIT
AS
BEGIN
    IF EXISTS (SELECT * FROM categories WHERE id = @id)
    BEGIN
        UPDATE categories SET name = @name, is_top_level = @is_top_level WHERE id = @id
        SELECT * FROM categories WHERE id = @id
    END
    ELSE
    BEGIN
        INSERT INTO categories (id, name, is_top_level) VALUES (@id, @name, @is_top_level)
        SELECT * FROM categories WHERE id = @id
    END
END