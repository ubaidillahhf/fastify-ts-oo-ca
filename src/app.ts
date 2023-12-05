import fastify, { FastifyInstance } from "fastify";
import config from './config/config';

class App {
    public app: FastifyInstance
    public app_port: number = parseInt(`${config.port}`, 10)

    constructor(appInit: { plugins: any; routes: any }) {
        this.app = fastify()
        this.routes(appInit.routes)
    }

    public routes(routes: { forEach: (arg: (routes: any) => void) => void }) {

        routes.forEach((route) => {
            let router = new route()

            this.app.register(router.routes, { prefix: 'api/v1' + router.prefix_route })
        })

        this.app.get("/", async (request, reply) => {
            reply.send({
                service: "Backend Service",
                last_version: "v1.0.0"
            })
        })
        this.app.get('/healthcheck', async (request, reply) => {
            reply.send({ healthcheck: "server is alive" })
        })
    }

    public listen() {
        this.app.listen({ port: this.app_port }, (err, address) => {
            if (err) throw err

            console.log(`App listening on ${address} 🌟👻`)
        })
    }
}

export default App