import type { Res } from "./type";

export const sendResponse = <T>(res: Res, {message, data, error}: {message: string, error?: boolean, data?:T },status: number) => {
    res.writeHead(status,{"content-type": "application/json"})
    res.end(JSON.stringify({
        success: error ? false : true,
        message: message,
        data: error ? null : data
    }))

}