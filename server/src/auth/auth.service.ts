import { Injectable, NotFoundException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async validateUser(login: string, password: string): Promise<any> {
        const user = await this.usersService.findOneByLogin(login);
        if (user && user.password === password) {
            return user;
        }
        throw new NotFoundException('User not found')
    }

    async login(user: any) {
        const payload = { login: user.login, sub: user._id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}