import { ClientDuplexStream, credentials } from "@grpc/grpc-js";
import { MassaServiceClient } from "./build/nodejs/api_grpc_pb";
import {
    GetVersionRequest,
    GetVersionResponse,
    NewFilledBlocksResponse,
} from "./build/nodejs/api_pb";

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

const subscribeFilledBlocks = async () => {
    const stream = service.newFilledBlocks();
    return new Promise((resolve, reject) => {
        stream.on("data", (data: NewFilledBlocksResponse) => {
            const block = data.getFilledBlock()?.toObject();
            const operations = block?.operationsList;
            console.log(block?.header?.id, operations?.length);
            operations?.forEach((op) =>
                console.log({
                    id: op.operationId,
                    call: op.operation?.content?.op?.callSc,
                })
            );
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

const port = process.env.PORT || 33037;
const host = process.env.HOST || "37.187.156.118";
const url = `${host}:${port}`.replace(" ", "");
console.log(url);
const service = new MassaServiceClient(url, credentials.createInsecure());

(async () => {
    const version = await getVersion();
    console.log(version.toObject());

    subscribeFilledBlocks();
})();
