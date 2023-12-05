import { FastifyInstance, FastifyPluginOptions } from "fastify"
import responseHandler from "../presenter/presenter"
import UserUsecase from '../../application/usecase/user.usecase'
import { IUserEntity } from "src/domain/entities/user.interface"

class UserRoutes {
    public prefix_route = '/users'

    async routes(fastify: FastifyInstance, options: FastifyPluginOptions, done: any) {

        fastify.post(`/create`, async (request, reply) => {
            responseHandler(async () => {
                const reqCreate: IUserEntity = request.body as IUserEntity

                const data = await UserUsecase.registerUser(reqCreate)
                return data
            }, reply)

            await reply
        })
    }
}

export default UserRoutes