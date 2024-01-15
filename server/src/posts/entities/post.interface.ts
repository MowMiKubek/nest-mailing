import { IContent } from "./content.interface";

export interface IPost extends Document {
    title: string;
    slug: string;
    content: IContent[];
}