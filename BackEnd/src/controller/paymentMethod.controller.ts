import validatePaymentMethod from "../helpers/paymentMethod.validate";
import {Request,Response,RequestHandler} from "express";
import PaymentMethodModel from '../model/paymentMethod.model';
import {v4 as uuidv4} from 'uuid';
import db from "../Databasehelper/db-connection";


export const createPaymentMethod: RequestHandler = async (req: Request, res: Response) => {

    try {
        const paymentMethod: PaymentMethodModel = {
            id: uuidv4() as string,
            name: req.body.name,
            description: req.body.description,
        }

        const {error} = validatePaymentMethod(paymentMethod);
        if (error) return res.status(400).send(error.details[0].message);

        if (db.checkConnection() as unknown as boolean) {
            const insertedPaymentMethod: PaymentMethodModel = await db.exec("InsertOrUpdatePaymentMethod", {...paymentMethod}) as unknown as PaymentMethodModel;

            if (insertedPaymentMethod) {
                res.status(200).send(insertedPaymentMethod);
            }
            else {
                res.status(500).send("Error creating payment method");
            }

        }

    } catch (error) {

        res.status(500).send("Error creating payment method");

        

        
    }

}

export const updatePaymentMethod: RequestHandler = async (req: Request, res: Response) => {
    try {

        const paymentMethod: PaymentMethodModel = {
            id: req.body.id,
            name: req.body.name,
            description: req.body.description,
        }

        const {error} = validatePaymentMethod(paymentMethod);
        if (error) return res.status(400).send(error.details[0].message);

        if (db.checkConnection() as unknown as boolean) {
            const updatedPaymentMethod: PaymentMethodModel = await db.exec("InsertOrUpdatePaymentMethod", {...paymentMethod}) as unknown as PaymentMethodModel;

            if (updatedPaymentMethod) {
                res.status(200).send(updatedPaymentMethod);
            }
            else {
                res.status(500).send("Error updating payment method");
            }

        }

    } catch (error) {

        res.status(500).send("Error updating payment method");

        
    }
}


export const getPaymentMethodById: RequestHandler = async (req: Request, res: Response) => {
    try {
        if (db.checkConnection() as unknown as boolean) {
            const paymentMethod = await db.exec("GetPaymentMethodById", {id: req.params.id}) ;

            if (paymentMethod) {
                if (paymentMethod.length > 0) {
                    res.status(200).send(paymentMethod);
                }
                else {
                    res.status(200).send("No payment method found");
                }
            }
            else {
                res.status(500).send("Error getting payment method");
            }

        }

    } catch (error) {

        res.status(500).send("Error getting payment method");

        
    }
}


export const getAllPaymentMethods: RequestHandler = async (req: Request, res: Response) => {
    try {
        if (db.checkConnection() as unknown as boolean) {
            const paymentMethods: PaymentMethodModel[] = await db.exec("GetAllPaymentMethod", {}) as unknown as PaymentMethodModel[];

            if (paymentMethods) {
                if (paymentMethods.length > 0) {
                    res.status(200).send(paymentMethods);
                }
                else {
                    res.status(200).send("No payment methods found");
                }
                
            }
            else {
                res.status(500).send("Error getting payment methods");
            }

        }

    } catch (error) {

        res.status(500).send("Error getting payment methods");

        
    }
}