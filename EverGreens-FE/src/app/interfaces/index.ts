

export interface Product{
    id: string;
    name: string;
    description: string;
    price: number;
    product_image_url: string;
    category_id: string;
    created_at: string;
    featured: boolean;
    is_deleted: boolean;
    recently_added: boolean;
}