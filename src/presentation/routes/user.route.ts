import { FastifyInstance, FastifyPluginOptions } from "fastify"
import responseHandler from "../presenter/presenter"
import UserUsecase from '../../application/usecase/user.usecase'

class UserRoutes {
    public prefix_route = '/users'

    async routes(fastify: FastifyInstance, options: FastifyPluginOptions, done: any) {

        fastify.post(`/create`, async (request, reply) => {
            responseHandler(async () => {

                const data = await UserUsecase.registerUser()
                return data
            }, reply)

            await reply
        })
    }
}

export default UserRoutes