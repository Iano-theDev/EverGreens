
import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.resolve(__dirname, '../.env') })

let Emailconfig ={
    host:'smtp.gmail.com',
    service:'gmail',
    port:587,
    auth:{
        user:'onesmus1024@gmail.com',
        pass:'ffqhhjsgezbxylyp'
    }
}


export default Emailconfig