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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const mail_service_js_1 = __importDefault(require("./background/services/email/mail.service.js"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../.env') });
const user_router_js_1 = __importDefault(require("./Routers/user.router.js"));
const product_router_js_1 = __importDefault(require("./Routers/product.router.js"));
const category_router_js_1 = __importDefault(require("./Routers/category.router.js"));
const order_router_js_1 = __importDefault(require("./Routers/order.router.js"));
const orderItem_router_js_1 = __importDefault(require("./Routers/orderItem.router.js"));
const payment_router_js_1 = __importDefault(require("./Routers/payment.router.js"));
const paymentMethod_router_js_1 = __importDefault(require("./Routers/paymentMethod.router.js"));
const review_router_js_1 = __importDefault(require("./Routers/review.router.js"));
const cartItem_route_js_1 = __importDefault(require("./Routers/cartItem.route.js"));
const node_cron_1 = __importDefault(require("node-cron"));
const PORT = process.env.PORT || 6000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use('/api/users', user_router_js_1.default);
app.use('/api/products', product_router_js_1.default);
app.use('/api/categories', category_router_js_1.default);
app.use('/api/orders', order_router_js_1.default);
app.use('/api/orderitems', orderItem_router_js_1.default);
app.use('/api/payments', payment_router_js_1.default);
app.use('/api/paymentmethods', paymentMethod_router_js_1.default);
app.use('/api/reviews', review_router_js_1.default);
app.use('/api/cartitems', cartItem_route_js_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
app.get('/', (req, res) => {
    res.send('Hello!');
});
node_cron_1.default.schedule('*/10 * * * * *', () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('running a task every 10 Second');
    yield (0, mail_service_js_1.default)();
}));
