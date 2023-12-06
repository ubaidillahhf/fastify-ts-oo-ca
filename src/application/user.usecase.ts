import { CustomError } from "../presentation/overide/error";
import { ICreateResponse, IUserEntity } from "src/domain/entities/user.entity"
import { UserRepo } from "../persistance/user.repo";

export class UserUsecase {
    private static userRepo = new UserRepo()

    public static async register(data: IUserEntity): Promise<ICreateResponse> {

        try {
            const res = await this.userRepo.create(data)
            return <ICreateResponse>{
                id: res,
            }
        } catch (err) {
            throw new CustomError(err, 500);
        }
    }
}