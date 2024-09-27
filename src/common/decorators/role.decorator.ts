import { SetMetadata } from "@nestjs/common"



export const rol = "rol"
export const Roldecorator = (...role: string[]) => SetMetadata(rol, role)

