import { FastifyInstance, FastifyPluginOptions } from "fastify"
import { UserController } from "../controller/user.controller"

export class UserRoutes {
    public prefix_route = '/users'

    async routes(fastify: FastifyInstance, options: FastifyPluginOptions, done: any) {

        fastify.post(`/create`, async (request, reply) => {
            UserController.register(request, reply)
        })
    }
}