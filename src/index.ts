import { createServer } from "http";
import { sendResponse } from "./utilies";
import { orderRoute } from "./routes/order.route";
// conceptual session

const server = createServer((req, res)=> {
    // console.log(req,res);
    // res.writeHead(200,{"Content-Type": "application/json"})
// res.end(JSON.stringify({message: 'heloo'}))
    const url = req.url ?? "/"
    if(url === '/'){
        // res.writeHead(200,{"content-type": "application/json"})
        // res.end(JSON.stringify({message: 'heloo'}))
        sendResponse(res, {message: "welcome to our Foodi server"}, 200)
        return
    }
    else if(url.startsWith("/order")){
        orderRoute(req, res)
    }
        sendResponse(res, {message: "not found "}, 404)

    // res.writeHead(200,{"content-type": "application/json"})
    //     res.end(JSON.stringify({message: 'not here'}))
})

const PORT = 3000;


server.listen(PORT,()=>{
    console.log(`this server running at port ${PORT}`);
})