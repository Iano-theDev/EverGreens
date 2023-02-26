

export class Review {
    id: string;
    user_id: string;
    product_id: string;
    rating: number;
    review: string;
    is_deleted: boolean;
    created_at: Date;

    constructor(id: string, user_id: string, product_id: string, rating: number, review: string, is_deleted: boolean, created_at: Date) {
        this.id = id;
        this.user_id = user_id;
        this.product_id = product_id;
        this.rating = rating;
        this.review = review;
        this.is_deleted = is_deleted;
        this.created_at = created_at;
    }
}