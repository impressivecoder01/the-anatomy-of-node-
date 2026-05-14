import path from "node:path";
import type { Order } from "../type";
import fs from "fs/promises"

const DB_PATH = path.join(process.cwd(),"db", "data.json")
console.log(DB_PATH);

class OrderService{
    private async readData(): Promise<Order[]>{
        try{
            const data = await fs.readFile(DB_PATH , "utf-8")
            return JSON.parse(data)
        }
        catch(err){
            return []
        }
    }
    private async writeData(data : Order[]){
        await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2))
    }
    //GET
    async get(){
        const data = await this.readData()
        return data
    }
    //create
    async create(order: Omit<Order, "id">){
        const data = await this.readData()

        const newOrder = {
            ...order,
            id: String(Math.floor(Math.random()* 100))
        }
        data.push(newOrder)
        await this.writeData(data)
    }
}

const OrderServices = new OrderService()
await OrderServices.create({
    customer : "korim",
    food: "apple",
    price: 250,
    quantity: 1000
})
//  OrderServices.readData()