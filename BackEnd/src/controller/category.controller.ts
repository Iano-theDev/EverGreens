import CategoryModel from "../model/category.model";
import { Request, Response, RequestHandler } from "express";
import { v4 as uuidv4 } from 'uuid';
import db from "../Databasehelper/db-connection";
import { validateCategory } from "../helpers/category.validate";



export const createCategory: RequestHandler = async (req: Request, res: Response) => {
    try {
      
        const category: CategoryModel = {
            id: uuidv4() as string,
            name: req.body.name,
            is_top_level: req.body.is_top_level,
        }
        const { error } = validateCategory(category);
        if (error) return res.status(400).send(error.details[0].message);


        if (db.checkConnection() as unknown as boolean) {
                
                const insertedCategory: CategoryModel = await db.exec("InsertOrUpdateCategory", { ...category }) as unknown as CategoryModel;
    
                if (insertedCategory) {
                    res.status(200).send(insertedCategory);
                }
                else {
                    res.status(500).send("Error creating category");
                }
    
            }


    } catch (error) {

        res.status(500).send("Error creating category");

        
    }
}

export const getAllCategories: RequestHandler = async (req: Request, res: Response) => {

    try {
        if (db.checkConnection() as unknown as boolean) {

            const categories: CategoryModel[] = await db.exec("GetAllCategories", {}) as unknown as CategoryModel[];

            if (categories) {
                if (categories.length > 0) {
                    res.status(200).send(categories);
                }
                else {
                    res.status(200).send({message : "No categories found"});
                }
            }
            else {
                res.status(500).send({message : "Error getting categories"});
            }

        }
    } catch (error) {

        res.status(500).send({message : "Error getting categories"});
        
    }
}


export const getCategoryByName: RequestHandler = async (req: Request, res: Response) => {
    try {
        if (db.checkConnection() as unknown as boolean) {
            console.log(req.params.name);
            
            const category = await db.exec("GetCategoryByName", { name: req.params.name });

            if (category) {
                if (category.length > 0) {
                    res.status(200).send(category);
                }
                else {
                    res.status(200).send({message : "No categories found"});
                }
            }
            else {
                res.status(500).send("Error getting category");
            }

        }
    } catch (error) {

        res.status(500).send("Error getting category");
        
    }
}


export const getCategoryById: RequestHandler = async (req: Request, res: Response) => {
    try {
        if (db.checkConnection() as unknown as boolean) {
            const id = req.params.id;

            const category = await db.exec("GetCategoryById", { id:id}) ;
         
            if (category) {
             
                if (category.length > 0) {
                    res.status(200).send(category);
                }
                else {
                    res.status(200).send({message : "No categories found"});
                }
            }
            else {
                res.status(500).send({message : "Error getting category"});
            }

        }
    } catch (error) {

        res.status(500).send({message : "Error getting category"});
        
    }
}