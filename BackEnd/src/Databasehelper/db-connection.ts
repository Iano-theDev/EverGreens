import mssql from 'mssql'
import DBconfig from '../config/db-config'


/**
 * DatabaseConnect
 * 
 * @class DatabaseConnect
 * @method createRequest - creates a request object with the data provided
 * @method exec - executes the stored procedure with the data provided
 * @method checkConnection - checks if the connection is established
 * 
 */
class DatabaseConnect{
    public pool:Promise<mssql.ConnectionPool>
    constructor(){
        this.pool = mssql.connect(DBconfig)
    }
    createRequest(request:mssql.Request,data:{[x:string]:string|number}){
        let keys = Object.keys(data)

     
        keys.map(keyName=>{
            request.input(keyName,data[keyName])
        })

        return request

    }

    async exec(sp:string,data:{[x:string]:string}={})  {

        let emptyRequest =await  (await this.pool).request()
        console.log("data",data);
        

        let request= this.createRequest(emptyRequest,data)
        let result = await (await request.execute(sp)).recordset
        console.log("result",result);
        

        return result

    }

    checkConnection(){
        return this.pool.then(()=>{
            return true
        }).catch(()=>{
            return false
        })
    }
}


let db = new DatabaseConnect()

export default db