import { credentials } from "@grpc/grpc-js";
import { MassaServiceClient } from "./build/nodejs/api_grpc_pb";
import {
    GetBlocksRequest,
    GetBlocksResponse,
    GetVersionRequest,
    GetVersionResponse,
    NewBlocksResponse,
} from "./build/nodejs/api_pb";

const port = process.env.PORT || 33037;
const host = process.env.HOST || "149.202.84.7";
const url = `${host}:${port}`.replace(" ", "");
console.log(url);

const service = new MassaServiceClient(url, credentials.createInsecure());
// service.getVersion(new GetVersionRequest(), (err, res) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(res);
//     }
// });

const getVersion = async (): Promise<GetVersionResponse> => {
    return new Promise((resolve, reject) => {
        service.getVersion(new GetVersionRequest(), (err, version) => {
            if (err) {
                return reject(err);
            }
            return resolve(version);
        });
    });
};

const getBlocks = async (): Promise<GetBlocksResponse> => {
    return new Promise((resolve, reject) => {
        service.getBlocks(new GetBlocksRequest(), (err, version) => {
            if (err) {
                return reject(err);
            }
            return resolve(version);
        });
    });
};

const subscribe = async () => {
    const stream = service.newBlocks();
    return new Promise((resolve, reject) => {
        stream.on("data", (data: NewBlocksResponse) => {
            console.log(data.toObject());
        });
        stream.on("error", (err) => {
            console.log(err);
            reject(err);
        });
        stream.on("end", (e: any) => {
            console.log("end");
            resolve(e);
        });
    });
};

(async () => {
    const version = await getVersion();
    console.log(version.getVersion());

    // const blocks = await getBlocks();
    // console.log(blocks.toObject());

    subscribe();
})();
