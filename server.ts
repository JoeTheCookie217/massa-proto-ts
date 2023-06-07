import { credentials } from "@grpc/grpc-js";
import { MassaServiceClient } from "./build/nodejs/api_grpc_pb";
import { GetVersionRequest, GetVersionResponse } from "./build/nodejs/api_pb";

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

await getVersion()
    .then((version) => {
        console.log(version);
    })
    .catch((err) => {
        console.log(err);
    });
