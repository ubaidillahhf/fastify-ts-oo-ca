import { PrismaClient } from "@prisma/client";
import { IUserEntity } from "src/domain/entities/user.entity";

export interface IUserRepo {
    create(data: IUserEntity): Promise<number>;
}

export class UserRepo implements IUserRepo {
    private db: PrismaClient

    constructor() {
        this.db = new PrismaClient
    }

    public async create(data: IUserEntity): Promise<number> {

        const result = await this.db.users.create({
            data: {
                fullname: data.fullname,
                address: data.address,
                city: data.city,
                email: data.email,
                image_profile: data.image_profile,
                phone: data.phone,
                province: data.province,
                username: data.username
            }
        })

        return result.id as number

    }
}