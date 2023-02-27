import ProductModel from "../model/product.model";
import e, { Response,Request,RequestHandler } from "express";
import { v4 as uuidv4 } from 'uuid';
import db from "../Databasehelper/db-connection";
import { validateProduct } from "../helpers/product.validate";



export const createProduct: RequestHandler = async (req: Request, res: Response) => {
    
    try {

        // validate product fields
   
        const product: ProductModel = {
            id: uuidv4() as string,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            created_at: new Date().toISOString(),
            category_id: req.body.category_id,
            product_image_url: req.body.product_image_url,
            recently_added: req.body.recently_added,
            featured: req.body.featured,
            is_deleted: req.body.is_deleted
        }

        const { error } = validateProduct(product);
        if (error) return res.status(400).send(error.details[0].message);


        if (db.checkConnection() as unknown as boolean){
            const insertedProduct = await db.exec("InsertOrUpdateProduct", {...product });

            if (insertedProduct) {
                res.status(200).send(insertedProduct);
            }
            else {
                res.status(500).send("Error creating product");
            }




        }else
        {
            res.status(500).send("Error creating product");
        }


        
    } catch (error) {

        console.log(error);

        res.status(500).send("Error creating product");
        
    }

}

export const getAllProducts: RequestHandler = async (req: Request, res: Response) => {
    try {
        if (db.checkConnection() as unknown as boolean) {
            const products: ProductModel[] = await db.exec("GetAllProducts", {}) as unknown as ProductModel[];
            if (products) {
                if (products.length > 0) {
                    res.status(200).send(products);
                }
                else {
                    res.status(200).send("No products found");
                }
            }
            else {
                res.status(500).send("Error getting products");
            }
        }
        else {
            res.status(500).send("Error getting products");
        }
    } catch (error) {
        res.status(500).send("Error getting products");
    }
}

export const getProductById: RequestHandler = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        if (db.checkConnection() as unknown as boolean) {
            const product = await db.exec("GetProductById", { id });
            if (product) {
                if (product.length > 0) {
                    res.status(200).send(product);
                }
                else {
                    res.status(200).send("No product found");
                }
            }
            else {
                res.status(500).send("Error getting product");
            }
        }
        else {
            res.status(500).send("Error getting product");
        }
    } catch (error) {
        res.status(500).send("Error getting product");
    }
}


export const deleteProduct: RequestHandler = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        if (db.checkConnection() as unknown as boolean) {
            const deletedProduct = await db.exec("DeleteProduct", { id });
            if (deletedProduct) {
               if (deletedProduct.length > 0){
                res.status(200).send(deletedProduct);
               }
                else{
                    res.status(200).send("No product found");
                }
            }
            else {
                res.status(500).send("Error deleting product");
            }
        }
        else {
            res.status(500).send("Error deleting product");
        }
    } catch (error) {
        res.status(500).send("Error deleting product");
    }
}


export const updateProduct: RequestHandler = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const productToUpdate = await db.exec("GetProductById", { id });
        if (productToUpdate) {
          if (productToUpdate.length > 0){
            const updated: ProductModel = { ...productToUpdate, ...req.body };
            const { error } = validateProduct(updated);
            if (error) return res.status(400).send(error.details[0].message);
            if (db.checkConnection() as unknown as boolean) {
                const updatedProduct: ProductModel = await db.exec("InsertOrUpdateProduct", { ...updated }) as unknown as ProductModel;
                if (updatedProduct) {
                    res.status(200).send(updatedProduct);
                }
                else {
                    res.status(500).send("Error updating product");
                }
            }
            else {
                res.status(500).send("Error updating product");
            }
          }
            else{   

                res.status(500).send("Error updating product");
            }

        }

    } catch (error) {
        res.status(500).send("Error updating product");
    }
}

export const getProductByCategory: RequestHandler = async (req: Request, res: Response) => {
    try {
        const category_id = req.params.category_id;
        if (db.checkConnection() as unknown as boolean) {
            const products: ProductModel[] = await db.exec("GetProductByCategory", { category_id }) as unknown as ProductModel[];
            if (products.length > 0) {
                res.status(200).send(products);
            }
            else {
                res.status(500).send({message:"Error getting products"});
            }
        }
        else {
            res.status(500).send({message:"Error getting products"});
        }
    } catch (error) {
        console.log(error);
        
        res.status(500).send({message:"Error getting products"});
    }
}


export const getProductInTopLevelCategory: RequestHandler = async (req: Request, res: Response) => {
    try {
        const category_id = req.params.category_id;
        if (db.checkConnection() as unknown as boolean) {
            const products: ProductModel[] = await db.exec("GetProductInTopLevelCategory") as unknown as ProductModel[];
            if (products.length > 0) {
                res.status(200).send(products);
            }
            else {
                res.status(500).send("Error getting  products");
            }
        }
        else {
            res.status(500).send("Error getting products");
        }
    } catch (error) {
        console.log(error);
        
        res.status(500).send("Error getting products");
    }
}