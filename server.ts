import { Server, ServerCredentials } from "@grpc/grpc-js";
import { MassaService } from "./proto/massa/api/v1/api";

const port = process.env.PORT || 33037;
const host = process.env.HOST || "149.202.84.7";
const url = `${host}:${port}`.replace(" ", "");
console.log(url);

const server = new Server();
server.bindAsync(url, ServerCredentials.createInsecure(), () => {
    server.start();
    MassaService;

    console.log(`server is running on ${url}`);
});
