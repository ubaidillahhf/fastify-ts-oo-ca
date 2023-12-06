import { FastifyReply, FastifyRequest } from "fastify";
import { IUserEntity } from "src/domain/entities/user.entity";
import responseHandler from "../presenter/base-presenter";
import { UserUsecase } from '../../application/user.usecase'

export class UserController {

    public static async register(request: FastifyRequest, reply: FastifyReply) {

        responseHandler(async () => {
            const reqCreate: IUserEntity = request.body as IUserEntity

            const data = await UserUsecase.register(reqCreate)
            return data
        }, reply)

        await reply
    }
}