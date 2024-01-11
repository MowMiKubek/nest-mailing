export interface IUser extends Document {
    firstname: string;
    lastname: string;
    email: string;
    login: string;
    password: string;
}