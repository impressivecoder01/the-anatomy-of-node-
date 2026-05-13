import { createServer } from "http";


const server = createServer((req, res)=> {
    res.writeHead(200,{"Content-Type": "application/json"})
res.end(JSON.stringify({message: 'heloo'}))
})

const PORT = 3000;


server.listen(PORT,()=>{
    console.log(`this server running at port ${PORT}`);
})