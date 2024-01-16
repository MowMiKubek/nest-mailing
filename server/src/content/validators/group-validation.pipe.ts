import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

export class GroupValidationPipe implements PipeTransform {
    async transform(entity: any, metedata: ArgumentMetadata) {
        const groups = [];

        switch (entity.type) {
            case 'text':
                groups.push('text');
                break;
            case 'image':
                groups.push('image');
                break;
            case 'code':
                groups.push('code');
                break;
            default:
                throw new BadRequestException('Invalid content type');
        }

        const entityClass = plainToInstance(metedata.metatype, entity, { groups });
        const errors = await validate(entityClass, { groups });
        if(errors.length > 0) {
            const shortErrors = errors.map(error => Object.values(error.constraints)).flat();
            throw new BadRequestException(shortErrors);
        }

        return entityClass;
    }
}