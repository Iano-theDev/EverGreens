"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../.env') });
let Emailconfig = {
    host: 'smtp.gmail.com',
    service: 'gmail',
    port: 587,
    auth: {
        user: 'onesmus1024@gmail.com',
        pass: 'ffqhhjsgezbxylyp'
    }
};
exports.default = Emailconfig;
