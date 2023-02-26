"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, "../../.env") });
const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        jsonwebtoken_1.default.verify(bearerToken, process.env.JWT_SECRET, (err, authData) => {
            if (err) {
                res.sendStatus(403);
            }
            else {
                req.body.user = authData;
                next();
            }
        });
    }
    else {
        res.sendStatus(403);
    }
};
exports.verifyToken = verifyToken;
