import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserRole } from './roles.enum';

@Schema()
export class User {
    @Prop()
    firstname: string;

    @Prop()
    lastname: string;

    @Prop({ unique: true })
    email: string;

    @Prop({ unique: true })
    login: string;

    @Prop()
    password: string;

    @Prop({ enum: UserRole, default: UserRole.USER })
    role: UserRole;
}

export const UserSchema = SchemaFactory.createForClass(User);
