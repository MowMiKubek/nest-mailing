import { IsArray, IsEnum, IsString, Min, MinLength, ValidateIf, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

export class TextContentDto {
    type = 'text';
    
    @IsString()
    text: string;
}

export class ContentImageDto {
    type = 'image';

    @IsString()
    url: string;
    
    @IsString()
    title: string;
}

export class CodeContentDto {
    type = 'code';

    @IsString()
    language: string;
    
    @IsString()
    code: string;
}

export class ContentDto {
    @IsString()
    @IsEnum(['text', 'image', 'code'])
    type: string;

    // text
    @ValidateIf(o => o.type === 'text')
    @MinLength(3)
    text: string;

    // image
    @ValidateIf(o => o.type === 'image')
    @IsString()
    url: string;

    @ValidateIf(o => o.type === 'image')
    @MinLength(3)
    title: string;

    // code
    @ValidateIf(o => o.type === 'code')
    @IsString()
    language: string;
    
    @ValidateIf(o => o.type === 'code')
    @IsString()
    code: string;

}

export class CreatePostDto {
    @IsString()
    title: string;

    @IsString()
    slug: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContentDto)
    content: ContentDto[];
}
