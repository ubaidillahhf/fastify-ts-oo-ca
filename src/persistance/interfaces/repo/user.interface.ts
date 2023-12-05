import { IUserEntity } from "src/domain/entities/user.interface";

export interface IUserRepo {
    create(data: IUserEntity): void;
}