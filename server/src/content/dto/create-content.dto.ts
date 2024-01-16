import { IsEnum, IsString } from "class-validator";

export class CreateContentDto {
    @IsString()
    @IsEnum(['text', 'image', 'code'])
    type: string;

    @IsString({groups: ['text']})
    text: string;

    @IsString({groups: ['image']})
    url: string;
    
    @IsString({groups: ['image']})
    title: string;
    
    @IsString({groups: ['code']})
    code: string;

    @IsString({groups: ['code']})
    language: string;
}
