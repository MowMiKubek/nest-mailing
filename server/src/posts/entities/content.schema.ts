import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum ContentType {
    image = 'image',
    text = 'text',
    code = 'code',
}

@Schema({ discriminatorKey: 'type' })
export class ContentBase {
    @Prop({ type: String, required: true, enum: ContentType })
    type: string;
}
export const ContentBaseSchema = SchemaFactory.createForClass(ContentBase);


export class ImageContent {
    type: String;

    @Prop()
    title: string;

    @Prop()
    url: string;
}
export const ImageContentSchema = SchemaFactory.createForClass(ImageContent);

export class TextContent {
    type: String;

    @Prop()
    text: string;
}
export const TextContentSchema = SchemaFactory.createForClass(TextContent);

export class CodeContent {
    type: String;

    @Prop()
    language: string;

    @Prop()
    code: string;
}
export const CodeContentSchema = SchemaFactory.createForClass(CodeContent);