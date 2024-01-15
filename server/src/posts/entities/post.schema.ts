import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ContentBase } from "./content.schema";


@Schema({ timestamps: true })
export class Post {
    @Prop()
    title: string;

    @Prop()
    slug: string;

    @Prop({ type: [ContentBase], default: [] })
    content: ContentBase[];
}
export const PostSchema = SchemaFactory.createForClass(Post);