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
const nodemailer_1 = __importDefault(require("nodemailer"));
const email_config_1 = __importDefault(require("../config/email.config"));
function createTransporter(config) {
    return nodemailer_1.default.createTransport(config);
}
const sendMail = (messageOptions) => __awaiter(void 0, void 0, void 0, function* () {
    let transporter = createTransporter(email_config_1.default);
    yield transporter.verify();
    yield transporter.sendMail(messageOptions, (err, info) => {
        console.log(info);
    });
});
exports.default = sendMail;
