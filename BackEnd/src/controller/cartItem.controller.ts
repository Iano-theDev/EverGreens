import validateCartItem from "../helpers/cartItem.validate";
import {Request,Response,RequestHandler} from "express";
import db from "../Databasehelper/db-connection";
import CartItemModel from "../model/cartItem.model";
import {v4 as uuidv4} from 'uuid';


export const createCartItem: RequestHandler = async (req: Request, res: Response) => {
    
        try {
            const cartItem: CartItemModel = {
                id: uuidv4() as string,
                product_id: req.body.product_id,
                user_id: req.body.user.id,
                quantity: req.body.quantity
            }
    
            const {error} = validateCartItem(cartItem);
            if (error) return res.status(400).send(error.details[0].message);
    
            if (db.checkConnection() as unknown as boolean) {
                const insertedCartItem: CartItemModel = await db.exec("InsertOrUpdateCartItem", {...cartItem}) as unknown as CartItemModel;
    
                if (insertedCartItem) {
                    res.status(200).send(insertedCartItem);
                }
                else {
                    res.status(500).send("Error creating cart item");
                }
    
            }
    
        } catch (error) {
            console.log(error);
            
            res.status(500).send("Error creating cart item");
    
            
        }
    
    }


export const updateCartItem: RequestHandler = async (req: Request, res: Response) => {
    try {
        const cartItem: CartItemModel = {
            id: req.body.id,
            product_id: req.body.product_id,
            user_id: req.body.user.id,
            quantity: req.body.quantity
        }
    
        const {error} = validateCartItem(cartItem);
        if (error) return res.status(400).send(error.details[0].message);
    
        if (db.checkConnection() as unknown as boolean) {
            const updatedCartItem: CartItemModel = await db.exec("InsertOrUpdateCartItem", {...cartItem}) as unknown as CartItemModel;
    
            if (updatedCartItem) {
                res.status(200).send(updatedCartItem);
            }
            else {
                res.status(500).send("Error updating cart item");
            }
    
        }
    
    } catch (error) {
    
        res.status(500).send("Error updating cart item");
    
        
    }
}

export const removeOrReduceQuantity: RequestHandler = async (req: Request, res: Response) => {
    try {

        const id = req.params.id;

   
        if (db.checkConnection() as unknown as boolean) {
            const updatedCartItem: CartItemModel = await db.exec("RemoveOrReduceQuantity", {id:id}) as unknown as CartItemModel;

            if (updatedCartItem) {
                res.status(200).send(updatedCartItem);
            }
            else {
                res.status(500).send("Error updating cart item");
            }

        }

    } catch (error) {

        console.log(error);
        

        res.status(500).send("Error updating cart item");


    }
}
export const getCartItemByUserId: RequestHandler = async (req: Request, res: Response) => {
    try {
        const user_id: string = req.body.user.id;
    
        if (db.checkConnection() as unknown as boolean) {
            const cartItems: CartItemModel[] = await db.exec("GetCartItemByUserId", {user_id}) as unknown as CartItemModel[];
    
            if (cartItems) {
                res.status(200).send(cartItems);
            }
            else {
                res.status(500).send("Error getting cart items");
            }
    
        }
    
    } catch (error) {

        console.log(error);
        
    
        res.status(500).send("Error getting cart items");
    
        
    }
}



export const deleteCartItem: RequestHandler = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
    
        if (db.checkConnection() as unknown as boolean) {
            const deletedCartItem: CartItemModel = await db.exec("DeleteCartItem", {id}) as unknown as CartItemModel;
    
            if (deletedCartItem) {
                res.status(200).send(deletedCartItem);
            }
            else {
                res.status(500).send("Error deleting cart item");
            }
    
        }
    
    } catch (error) {
    
        res.status(500).send("Error deleting cart item");
    
        
    }
}



