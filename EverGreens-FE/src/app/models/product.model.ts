
import { Review } from "./review.model";


export class Product {
    id: string;
    name: string;
    description: string;
    price: number;
    created_at: string;
    category_id: string;
    product_image_url: string;
    recently_added: string;
    featured: string;
    is_deleted: string;
   

    constructor(id: string, name: string, description: string, price: number, created_at: string, category_id: string, product_image_url: string, recently_added: string, featured: string, is_deleted: string) {
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