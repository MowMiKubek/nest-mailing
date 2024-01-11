import { UserRole } from "./roles.enum";

export interface IUser extends Document {
    firstname: string;
    lastname: string;
    email: string;
    login: string;
    password: string;
    role: UserRole;
}