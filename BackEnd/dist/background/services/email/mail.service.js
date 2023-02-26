"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ejs_1 = __importDefault(require("ejs"));
const email_helper_1 = __importDefault(require("../../helpers/email.helper"));
const mssql_1 = __importDefault(require("mssql"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../.env') });
const db_config_1 = __importDefault(require("../../../config/db-config"));
const sendWelcomeEmail = () => __awaiter(void 0, void 0, void 0, function* () {
    const pool = yield mssql_1.default.connect(db_config_1.default);
    const users = yield (yield pool.request().
        query("SELECT * FROM Users WHERE is_sent ='0'")).recordset;
    for (let user of users) {
        ejs_1.default.renderFile('/media/onesmus/d42c9065-8792-4148-a205-cc0a748da294/dev/The Jitu/assignment/comforty/backend/src/background/services/email/templates/registration.ejs', { name: user.email }, (error, html) => __awaiter(void 0, void 0, void 0, function* () {
            console.log("html", html);
            console.log("error", error);
            const message = {
                from: process.env.EMAIL,
                to: user.email,
                subject: "Hello world?",
                html
            };
            try {
                yield (0, email_helper_1.default)(message);
                yield pool.request().query(`UPDATE Users SET is_sent ='1' WHERE id ='${user.id}'`);
            }
            catch (error) {
                console.log(error);
            }
        }));
    }
});
exports.default = sendWelcomeEmail;
