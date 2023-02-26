import nodemailer from 'nodemailer'
import Emailconfig from '../config/email.config'


function createTransporter(config:any){
    return nodemailer.createTransport(config)
    }


    const sendMail = async(messageOptions:any)=>{
        let transporter =createTransporter(Emailconfig)
        await transporter.verify()
        await transporter.sendMail(messageOptions, (err, info)=>{
            console.log(info);
            
        })
    }
    
    export default sendMail