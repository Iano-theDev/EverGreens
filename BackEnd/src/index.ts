import express, { Express } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import sendWelcomeEmail from './background/services/email/mail.service.js';
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import router from './Routers/user.router.js';
import productRouter from './Routers/product.router.js';
import categoryRouter from './Routers/category.router.js';
import orderRouter from './Routers/order.router.js';
import orderItemRouter from './Routers/orderItem.router.js';
import paymentRouter from './Routers/payment.router.js';
import paymentMethodRouter from './Routers/paymentMethod.router.js';
import reviewRouter from './Routers/review.router.js';
import cartItemRouter from './Routers/cartItem.route.js';
import cron from 'node-cron'
const PORT = process.env.PORT || 6000;
const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/users', router);
app.use('/api/products', productRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/orders', orderRouter);
app.use('/api/orderitems', orderItemRouter);
app.use('/api/payments', paymentRouter);
app.use('/api/paymentmethods', paymentMethodRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/cartitems', cartItemRouter);




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
    
});

app.get('/', (req, res) => {
    res.send('Hello!');   
});




cron.schedule('*/10 * * * * *', async() => {
    console.log('running a task every 10 Second');
    await sendWelcomeEmail()
  });

