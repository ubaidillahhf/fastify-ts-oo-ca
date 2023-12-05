import { FastifyReply } from "fastify"


export interface SuccessInterface {
    code: number
    data: any
    message: string
}

const defaults: Pick<SuccessInterface, 'code' | 'message'> = {
    code: 200,
    message: 'success',
};


const responseHandler = async (next: Function, reply: FastifyReply): Promise<void> => {
    try {
        const data: SuccessInterface = await next()

        reply.send({ ...defaults, data })
    } catch (error) {
        reply.code(400).send()
    }
}

export default responseHandler