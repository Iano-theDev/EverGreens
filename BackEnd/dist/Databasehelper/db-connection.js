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
const mssql_1 = __importDefault(require("mssql"));
const db_config_1 = __importDefault(require("../config/db-config"));
/**
 * DatabaseConnect
 *
 * @class DatabaseConnect
 * @method createRequest - creates a request object with the data provided
 * @method exec - executes the stored procedure with the data provided
 * @method checkConnection - checks if the connection is established
 *
 */
class DatabaseConnect {
    constructor() {
        this.pool = mssql_1.default.connect(db_config_1.default);
    }
    createRequest(request, data) {
        let keys = Object.keys(data);
        keys.map(keyName => {
            request.input(keyName, data[keyName]);
        });
        return request;
    }
    exec(sp, data = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let emptyRequest = yield (yield this.pool).request();
            console.log("data", data);
            let request = this.createRequest(emptyRequest, data);
            let result = yield (yield request.execute(sp)).recordset;
            console.log("result", result);
            return result;
        });
    }
    checkConnection() {
        return this.pool.then(() => {
            return true;
        }).catch(() => {
            return false;
        });
    }
}
let db = new DatabaseConnect();
exports.default = db;
