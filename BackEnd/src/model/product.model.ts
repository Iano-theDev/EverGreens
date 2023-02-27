// CREATE TABLE Products (
//     id VARCHAR(255) PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     description VARCHAR(255) NOT NULL,
//     price DECIMAL(10,2) NOT NULL,
//     created_at DATE NOT NULL DEFAULT GETDATE(),
//     category_id INTEGER NOT NULL,
//     product_image_url VARCHAR(255) NOT NULL,
//     recently_added BIT NOT NULL DEFAULT 1,
//     featured BIT NOT NULL DEFAULT 0,
//     CHECK (name <> ''),
//     CHECK (description <> ''),
//     CHECK (price > 0),
//     CHECK (created_at <= GETDATE()),
//     CHECK (category_id > 0),
//     CHECK (product_image_url <> ''),
//     CHECK (recently_added IN (0,1)),
//     CHECK (featured IN (0,1)),
//     FOREIGN KEY (category_id) REFERENCES categories(id),
// );

// create a product model class to be used as a type for the product

class ProductModel {

    id: string;

    name: string;

    description: string;

    price: string;

    created_at: string;

    category_id: string;

    product_image_url: string;

    recently_added: string;

    featured: string;
    is_deleted: string;

    constructor(id: string, name: string, description: string, price: string, created_at: string, category_id: string, product_image_url: string, recently_added: string, featured: string,is_deleted: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.created_at = created_at;
        this.category_id = category_id;
        this.product_image_url = product_image_url;
        this.recently_added = recently_added;
        this.featured = featured;
        this.is_deleted = is_deleted;
    }
}


export default ProductModel;