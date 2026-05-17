import { OrderServices } from "../service/order.service";
import type { Req, Res } from "../type";
import { sendResponse } from "../utilies";

export  const orderRoute = async (req : Req, res: Res) => {
    if(req.method === 'GET'){
        const orders = await OrderServices.get()
        return sendResponse(res, {message: 'Order retrieved', data: orders}, 200)
        
    }

}