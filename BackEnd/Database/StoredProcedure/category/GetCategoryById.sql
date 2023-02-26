
CREATE PROCEDURE GetCategoryById
    @id VARCHAR(255)
AS
BEGIN
    SELECT * FROM categories WHERE id = @id
END

