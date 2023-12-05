import CustomError from "../../presentation/overide/error";
import { ICreateResponse, IUserEntity } from "src/domain/entities/user.interface"
import UserRepo from "../../persistance/user.impl";

class UserUsecase {
    private static ur = new UserRepo()

    public static async registerUser(data: IUserEntity): Promise<ICreateResponse> {

        try {
            const res = await this.ur.create(data)
            return <ICreateResponse>{
                id: res,
            }
        } catch (err) {
            throw new CustomError(err, 500);
        }
    }
}

export default UserUsecase