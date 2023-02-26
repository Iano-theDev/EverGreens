
USE [comfortyEcommerce]
GO

CREATE PROCEDURE InsertOrUpdateProduct
    @id VARCHAR(255),
    @name VARCHAR(255),
    @description VARCHAR(255),
    @price DECIMAL(10,2),
    @created_at DATE,
    @category_id VARCHAR(255),
    @product_image_url VARCHAR(255),
    @recently_added BIT,
    @featured BIT,
    @is_deleted BIT

AS
BEGIN
    IF EXISTS (SELECT * FROM products WHERE id = @id)
    BEGIN
        UPDATE products SET
            name = @name,
            description = @description,
            price = @price,
            created_at = @created_at,
            category_id = @category_id,
            product_image_url = @product_image_url,
            recently_added = @recently_added,
            featured = @featured,
            is_deleted = @is_deleted
        WHERE id = @id

        SELECT * FROM products WHERE id = @id
    END
    ELSE
    BEGIN
        INSERT INTO products (id, name, description, price, created_at, category_id, product_image_url, recently_added, featured, is_deleted)
        VALUES (@id, @name, @description, @price, @created_at, @category_id, @product_image_url, @recently_added, @featured, @is_deleted)
        SELECT * FROM products WHERE id = @id
    END
END


DROP PROCEDURE IF EXISTS InsertOrUpdateProduct