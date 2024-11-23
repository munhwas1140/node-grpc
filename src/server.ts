import { Server, ServerCredentials } from '@grpc/grpc-js';
import { AuthServiceService } from './protos/auth';
import { login } from './login';

const server = new Server();
server.addService(AuthServiceService, { login: login });
server.bindAsync('localhost:8080', ServerCredentials.createInsecure(), () => {
    // server.start();
});
