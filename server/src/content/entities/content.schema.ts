import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({discriminatorKey: 'type', strict: true})
export class Content {
    @Prop({
        type: String,
        required: true,
        enum: ['text', 'image', 'code']
    })
    type: string;
}
export const ContentSchema = SchemaFactory.createForClass(Content);

@Schema()
export class TextContent {
    type: string;

    @Prop()
    text: string;
}
export const TextContentSchema = SchemaFactory.createForClass(TextContent);

@Schema()
export class ImageContent {
    type: string;

    @Prop()
    url: string;

    @Prop()
    title: string;
}
export const ImageContentSchema = SchemaFactory.createForClass(ImageContent);

@Schema()
export class CodeContent {
    type: string;

    @Prop()
    code: string;

    @Prop()
    language: string;
}
export const CodeContentSchema = SchemaFactory.createForClass(CodeContent);