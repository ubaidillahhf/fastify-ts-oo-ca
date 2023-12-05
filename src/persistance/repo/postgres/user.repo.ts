import { IUserEntity } from "src/domain/entities/user.interface";
import { ISqlWrapper } from "src/persistance/interfaces/repo/sql-wrapper";
import { IUserRepo } from "src/persistance/interfaces/repo/user.repo";

const DB_TABLE = "users"

export class UserRepo implements IUserRepo {

    private db: ISqlWrapper
    constructor(db: ISqlWrapper) {
        this.db = db
    }

    async create(data: IUserEntity) {
        await this.db.query(`insert into ${DB_TABLE} (name) values ($1)`, [data.fullname])
    }
}