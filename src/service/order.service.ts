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
    // get by id
    async getById(id: string){
        const data = await this.readData()
        return data.find(order => order.id === id) || null

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
    // update
    async update(id: string, updates: Partial<Omit<Order,"id">>): Promise<Order | null>{
        const data = await this.readData()
        const i = data.findIndex(order => order.id === id)
        if( i === -1) return null
        data[i] = {...data[i], ...updates} as Order
        await this.writeData(data)
        return data[i]
    }
    // delete 
    async delete(id: string){
        const data = await this.readData()
        const i = data.findIndex(order => order.id === id)
        if( i === -1) return false
        data.splice(i, 1)
        await this.writeData(data)
        return true
    }
}

export const OrderServices = new OrderService()
OrderServices.update("2", {customer: "k"})
// await OrderServices.create({
//     customer : "korim",
//     food: "apple",
//     price: 250,
//     quantity: 1000
// })
// console.log(await OrderServices.getById("2"));
//  OrderServices.readData()