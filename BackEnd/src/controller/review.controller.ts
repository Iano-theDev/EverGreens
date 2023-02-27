import validateReview from "../helpers/review.validate";
import {Request,Response,RequestHandler} from "express";
import ReviewModel from '../model/review.model';
import {v4 as uuidv4} from 'uuid';
import db from "../Databasehelper/db-connection";


export const createReview: RequestHandler = async (req: Request, res: Response) => {
    try {
        const review: ReviewModel = {
            id: uuidv4() as string,
            user_id: req.body.user_id,
            product_id: req.body.product_id,
            rating: req.body.rating,
            review: req.body.review,
            is_deleted: req.body.is_deleted,
            created_at: new Date().toISOString()
        }

        const {error} = validateReview(review);
        if (error) return res.status(400).send(error.details[0].message);

        if (db.checkConnection() as unknown as boolean) {
            const insertedReview: ReviewModel = await db.exec("InsertOrUpdateReview", {...review}) as unknown as ReviewModel;

            if (insertedReview) {
                res.status(200).send(insertedReview);
            }
            else {
                res.status(500).send("Error creating review");
            }

        }else
        {
            res.status(500).send("Error creating review");
        }

    } catch (error) {

        res.status(500).send("Error creating review");


    }

}


export const updateReview: RequestHandler = async (req: Request, res: Response) => {

    try {
        const review: ReviewModel = {
            id: req.body.id,
            user_id: req.body.user_id,
            product_id: req.body.product_id,
            rating: req.body.rating,
            review: req.body.review,
            is_deleted: req.body.is_deleted,
            created_at: new Date().toISOString()
        }

        const {error} = validateReview(review);
        if (error) return res.status(400).send(error.details[0].message);

        if (db.checkConnection() as unknown as boolean) {
            const updatedReview: ReviewModel = await db.exec("InsertOrUpdateReview", {...review}) as unknown as ReviewModel;

            if (updatedReview) {
                res.status(200).send(updatedReview);
            }
            else {
                res.status(500).send("Error updating review");
            }

        }else
        {
            res.status(500).send("Error updating review");
        }


    } catch (error) {

        res.status(500).send("Error updating review");

        
    }
}


export const deleteReview: RequestHandler = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        if (db.checkConnection() as unknown as boolean) {
            const deletedReview: ReviewModel = await db.exec("DeleteReview", {id}) as unknown as ReviewModel;

            if (deletedReview) {
                res.status(200).send(deletedReview);
            }
            else {
                res.status(500).send("Error deleting review");
            }

        }else
        {
            res.status(500).send("Error deleting review");
        }

    } catch (error) {

        console.log(error);
        res.status(500).send("Error deleting review");

        

        
    }

}

export const getReviewByProductId: RequestHandler = async (req: Request, res: Response) => {
    try {
        const product_id = req.params.product_id;

        if (db.checkConnection() as unknown as boolean) {
            const reviews: ReviewModel[] = await db.exec("GetReviewByProductId", {product_id}) as unknown as ReviewModel[];

            if (reviews) {
                res.status(200).send(reviews);
            }
            else {
                res.status(500).send("Error getting reviews");
            }

        }else
        {
            res.status(500).send("Error getting reviews");
        }

    } catch (error) {

        console.log(error);

        res.status(500).send("Error getting reviews");

        

        
    }

}