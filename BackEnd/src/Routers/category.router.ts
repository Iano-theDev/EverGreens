import { Router } from "express";
import { createCategory,getAllCategories,getCategoryById,getCategoryByName } from "../controller/category.controller";


const categoryRouter = Router();


categoryRouter.post("/", createCategory);
categoryRouter.get("/", getAllCategories);
categoryRouter.get("/:id", getCategoryById);
categoryRouter.get("/name/:name", getCategoryByName);


export default categoryRouter;