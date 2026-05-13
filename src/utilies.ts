import type { Res } from "./type";

export const sendResponse = <T>(res: Res, {message, data, error}: {message: string, error?: boolean, data?:T },status = 200) => {
    res.writeHead(200,{"content-type": "application/json"})
    res.end(JSON.stringify({
        success: error ? false : true,
        message: message,
        data: error ? null : data
    }))

}