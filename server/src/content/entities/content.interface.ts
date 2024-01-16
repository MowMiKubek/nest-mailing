export interface IContent extends Document {
    type: string;
}

export interface ITextContent extends IContent {
    text: string;
}

export interface IImageContent extends IContent {
    url: string;
    title: string;
}

export interface ICodeContent extends IContent {
    code: string;
    language: string;
}

export type ContentType = ITextContent | IImageContent | ICodeContent;