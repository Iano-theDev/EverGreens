import dotenv from 'dotenv'
import path from 'path'

dotenv.config({path:path.resolve(__dirname,'../../.env')})


// database config
const DBconfig = {
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
    server: '54.92.74.57',
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: true, 
      trustServerCertificate: true,
    }
  }

  export default DBconfig