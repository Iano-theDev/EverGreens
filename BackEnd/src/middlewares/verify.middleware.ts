import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];

        jwt.verify(bearerToken,process.env.JWT_SECRET as string, (err, authData) => {
            if (err) {
                res.sendStatus(403);
            } else {
                req.body.user = authData;
                next();
            }
        }
        );
    } else {
        res.sendStatus(403);
    }
};