interface IUserEntity {
    fullname: string
    username: string
    phone: string
    address: string
    city: string
    province: string
    email: string
    image_profile: string
}

interface ICreateResponse {
    id: number
}

export { IUserEntity, ICreateResponse }