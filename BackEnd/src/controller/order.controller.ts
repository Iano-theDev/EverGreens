
import { Request, Response,RequestHandler } from "express";
import { validateOrder } from "../helpers/order.validate";
import { v4 as uuidv4 } from 'uuid';

import OrderModel from "../model/order.model";
import db from "../Databasehelper/db-connection";


export const createOrder: RequestHandler = async (req: Request, res: Response) => {
    try {
      
        const order: OrderModel = {
            id: uuidv4() as string,
            user_id: req.body.user_id,
            created_at: new Date().toISOString(),
            is_paid: req.body.is_paid,
            is_delivered: req.body.is_delivered,
            amount: req.body.amount,
        }
        
          // validate order fields
          const { error } = validateOrder(order);
          if (error) return res.status(400).send(error.details[0].message);
  

        if (db.checkConnection() as unknown as boolean) {

            const insertedOrder: OrderModel = await db.exec("InsertOrUpdateOrder", {...order}) as unknown as OrderModel;

            if (insertedOrder) {
                res.status(200).send(insertedOrder);
            }
            else {
                res.status(500).send("Error creating order");
            }

        } else {
            res.status(500).send("Error creating order");
        }

    } catch (error) {
        console.log(error);

        res.status(500).send("Error creating order");

    }
}


export const getAllOrders: RequestHandler = async (req: Request, res: Response) => {
    try {
        if (db.checkConnection() as unknown as boolean) {

            const orders: OrderModel[] = await db.exec("GetAllOrders", {}) as unknown as OrderModel[];

            if (orders) {
                if (orders.length > 0) {
                    res.status(200).send(orders);
                }
                else {
                    res.status(200).send({ message: "No orders found" });
                }
            }
            else {
                res.status(500).send({ message: "Error getting orders" });  
            }

        }
    } catch (error) {

        res.status(500).send({ message: "Error getting orders" });

    }
}

export const getOrderById: RequestHandler = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        if (db.checkConnection() as unknown as boolean) {

            const order = await db.exec("GetOrderById", { id: req.params.id }) ;

            if (order.length > 0) {
                res.status(200).send(order);
               
            }
            else {
                res.status(500).send("Error getting order");
            }

        }
    } catch (error) {

        console.log(error);
        

        res.status(500).send("Error getting order");

    }
}

export const deleteOrder: RequestHandler = async (req: Request, res: Response) => {
    try {
        if (db.checkConnection() as unknown as boolean) {

            const order: OrderModel = await db.exec("DeleteOrder", { id: req.params.id }) as unknown as OrderModel;

            if (order) {
                res.status(200).send(order);
            }
            else {
                res.status(500).send("Error deleting order");
            }

        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Error deleting order");

    }
}

export const updateOrder: RequestHandler = async (req: Request, res: Response) => {
    try {
        const order = await db.exec("GetOrderById", { id: req.params.id }) as unknown as OrderModel[];
        console.log(order);
        
        if (order) {
            const updatedOrder= {
                id: req.params.id || order[0].id,
                user_id: order[0].user_id,
                created_at: new Date(order[0].created_at).toISOString(),
                is_paid: req.body.is_paid || order[0].is_paid,
                is_delivered: req.body.is_delivered || order[0].is_delivered,
                amount: req.body.amount || order[0].amount,
            }

            console.log(updatedOrder);

            const { error } = validateOrder(updatedOrder);
            if (error) return res.status(400).send(error.details[0].message);


            const updatedOrderResult = await db.exec("InsertOrUpdateOrder", updatedOrder) as unknown as OrderModel;

            if (updatedOrderResult) {
                res.status(200).send(updatedOrderResult);
            }
            else {
                res.status(500).send("Error updating order");
            }
        }
    } catch (error) {
        console.log(error);
        

        res.status(500).send("Error updating order");

    }
}

export const getOrdersByUserId: RequestHandler = async (req: Request, res: Response) => {
    try {
        if (db.checkConnection() as unknown as boolean) {

            const orders: OrderModel[] = await db.exec("GetOrdersByUserId", { user_id: req.params.user_id }) as unknown as OrderModel[];
            if (orders) {
                res.status(200).send({message: "Order updated successfully", orders: orders});
            }
            else {
                res.status(500).send("Error getting orders");
            }

        }
    } catch (error) {
        console.log(error);
        

        res.status(500).send("Error getting orders");

    }
}


