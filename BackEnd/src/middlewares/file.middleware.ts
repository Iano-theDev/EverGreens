import multer from "multer";
import { Request, Response, NextFunction } from "express";


const storage = multer.diskStorage({
    destination: (req:Request, file, cb) => {
        cb(null, "./uploads/");
    }
    ,
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+'.'+file.mimetype.split('/')[1]);
    }
});

const fileFilter = (req: Request, file: any, cb: any) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5

    },
    fileFilter: fileFilter

});

export default upload;
