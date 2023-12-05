import { FastifyReply } from "fastify"
interface presenterInterface {
    code: number
    data: any
    message: string
}

const defaults: Pick<presenterInterface, 'code' | 'message' | 'data'> = {
    code: 200,
    message: 'success',
    data: null
};

const errDefaults: Pick<presenterInterface, 'code' | 'message' | 'data'> = {
    code: 500,
    message: 'uknown error occured',
    data: null
};

const responseHandler = async (next: Function, reply: FastifyReply): Promise<void> => {
    try {
        const data: presenterInterface = await next()

        reply.send({ ...defaults, data })
    } catch (error) {

        reply.code(200).send({ ...errDefaults, message: error.message, code: error.statusCode })
    }
}

export default responseHandler