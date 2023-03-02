import ejs from 'ejs'
import sendMail from '../../helpers/email.helper';
import mssql from 'mssql'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.resolve(__dirname, '../../.env') })
import DBconfig from '../../../config/db-config'

interface User {
    id:string, 
    email:string,
    password:string,
    created_at:string,
    is_admin:string,
    is_deleted:string,
    phone: string,
    is_sent:string,
}

// id VARCHAR(255) PRIMARY KEY,
//     user_id VARCHAR(255) NOT NULL,
//     created_at DATE NOT NULL DEFAULT GETDATE(),
//     is_paid BIT NOT NULL DEFAULT 0,
//     is_delivered BIT NOT NULL DEFAULT 0,
//     amount DECIMAL(10,2) NOT NULL,

interface Order {
    id:string,
    user_id:string,
    created_at:string,
    is_paid:string,
    is_delivered:string,
    amount:string
}




export const sendWelcomeEmail = async () => {
    const pool = await mssql.connect(DBconfig)
    const users: User[] = await (await pool.request().
        query("SELECT * FROM Users WHERE is_sent ='0'")).recordset
    console.log("users",users)

    for (let user of users) {
        ejs.renderFile('/media/onesmus/d42c9065-8792-4148-a205-cc0a748da294/dev/The Jitu/assignment/comforty/backend/src/background/services/email/templates/registration.ejs', { name: user.email }, async (error: any, html: any) => {
            console.log("html",html);
            console.log("error",error);
            const message = {
                from: process.env.EMAIL,
                to: user.email,
                subject: "welcome to comforty",
                html
            };

           

            try {
                await sendMail(message)
                await pool.request().query(`UPDATE Users SET is_sent ='1' WHERE id ='${user.id}'`)
            } catch (error) {
                console.log(error);

            }
        })
    }
}


export const sendOrderEmail = async () => {
    const pool = await mssql.connect(DBconfig)
    
    const orders:Order[] = await (await pool.request().query("SELECT * FROM Orders WHERE is_sent ='0' AND is_updated ='0'")).recordset
    console.log("orders",orders)
    

    for (let order of orders) {
        const user = await (await pool.request().query(`SELECT * FROM Users WHERE id ='${order.user_id}'`)).recordset[0]
        const orderItems = await (await pool.request().query(`SELECT * FROM Order_items WHERE order_id ='${order.id}'`)).recordset
        const products = await (await pool.request().query(`SELECT * FROM Products`)).recordset
        const orderItemsWithProducts = orderItems.map((orderItem: any) => {
            const product = products.find((product: any) => product.id === orderItem.product_id)
            return { ...orderItem, product }
        })
        ejs.renderFile('/media/onesmus/d42c9065-8792-4148-a205-cc0a748da294/dev/The Jitu/assignment/comforty/backend/src/background/services/email/templates/orderPlaced.ejs', { name: user.email, orderItems: orderItemsWithProducts, order }, async (error: any, html: any) => {
            const message = {
                from: process.env.EMAIL,
                to: user.email,
                subject: "Order Confirmation",
                html
            };

            try {
                await sendMail(message)
                await pool.request().query(`UPDATE Orders SET is_sent ='1' WHERE id ='${order.id}'`)
            } catch (error) {
                console.log(error);

            }
        })
    }
}


export const sendOrderIsDeliveredEmail = async () => {
    const pool = await mssql.connect(DBconfig)
    const orders = await (await pool.request().query("SELECT * FROM Orders WHERE is_sent ='1' AND is_delivered ='1' AND is_updated ='0'")).recordset
    console.log("delivered",orders);
    
    for (let order of orders) {
        const user = await (await pool.request().query(`SELECT * FROM Users WHERE id ='${order.user_id}'`)).recordset[0]
        const orderItems = await (await pool.request().query(`SELECT * FROM Order_items WHERE order_id ='${order.id}'`)).recordset
        const products = await (await pool.request().query(`SELECT * FROM Products`)).recordset
        const orderItemsWithProducts = orderItems.map((orderItem: any) => {
            const product = products.find((product: any) => product.id === orderItem.product_id)
            return { ...orderItem, product }
        })
        ejs.renderFile('/media/onesmus/d42c9065-8792-4148-a205-cc0a748da294/dev/The Jitu/assignment/comforty/backend/src/background/services/email/templates/orderDelivered.ejs', { name: user.email, orderItems: orderItemsWithProducts, order }, async (error: any, html: any) => {
            const message = {
                from: process.env.EMAIL,
                to: user.email,
                subject: "Your order is delivered",
                html
            };

            try {
                await sendMail(message)
                await pool.request().query(`UPDATE Orders SET is_updated ='1' WHERE id ='${order.id}'`)
            } catch (error) {
                console.log(error);

            }
        })
    }
}