export class Server {
    instanceType: string;
    name: string;
    status: string;
    started: string;

    constructor(instanceType, name, status, started) {
        this.instanceType = instanceType;
        this.name = name;
        this.status = status;
        this.started = started;
    }
}