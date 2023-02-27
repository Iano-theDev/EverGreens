import {v4 as uuidv4} from 'uuid';
import db from "../Databasehelper/db-connection";
import {validateOrderItem} from "../helpers/orderItem.validate";
import {Request,Response,RequestHandler} from "express";
import OrderItemModel from '../model/orderItem.model';

export const createOrderItem: RequestHandler = async (req: Request, res: Response) => {
    try {
        
        const orderItem: OrderItemModel = {
            id: uuidv4() as string,
            order_id: req.body.order_id,
            product_id: req.body.product_id,
            quantity: req.body.quantity,

        }

        const {error} = validateOrderItem(orderItem);
        if (error) return res.status(400).send(error.details[0].message);


        if (db.checkConnection() as unknown as boolean) {
                
                const insertedOrderItem: OrderItemModel = await db.exec("InsertOrUpdateOrderItem", {...orderItem}) as unknown as OrderItemModel;
    
                if (insertedOrderItem) {
                    res.status(200).send(insertedOrderItem);
                }
                else {
                    res.status(500).send("Error creating order item");
                }
    
            }
            


    } catch (error) {

        res.status(500).send("Error creating order item");

        
        
    }
}

export const getAllOrderItemByOrderId: RequestHandler = async (req: Request, res: Response) => {
    
        try {
            if (db.checkConnection() as unknown as boolean) {
    
                const orderItems: OrderItemModel[] = await db.exec("GetAllOrderItemsByOrderId", {order_id: req.params.order_id}) as unknown as OrderItemModel[];
    
                if (orderItems) {
                    res.status(200).send(orderItems);
                }
                else {
                    res.status(500).send("Error getting order items");
                }
    
            }
        } catch (error) {
    
            res.status(500).send("Error getting order items");
            
        }
    }


export const updateOrderItem: RequestHandler = async (req: Request, res: Response) => {
    try {
        const {error} = validateOrderItem(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const orderItem: OrderItemModel = {
            id: req.body.id,
            order_id: req.body.order_id,
            product_id: req.body.product_id,
            quantity: req.body.quantity,

        }

    } catch (error) {

        res.status(500).send("Error updating order item");

        
        
    }

}
