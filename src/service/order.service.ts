import path from "node:path";
import type { Order } from "../type";
import fs from "fs/promises"

const DB_PATH = path.join(process.cwd(),"db", "data.json")
console.log(DB_PATH);

class OrderService{
     async readData(): Order[]{
        try{
            const data = await fs.readFile(DB_PATH , "utf-8")
            console.log(data);
        }
        catch(err){
            // console.log("error", err);
        }
    }
}

const OrderServices = new OrderService()
await OrderServices.readData()