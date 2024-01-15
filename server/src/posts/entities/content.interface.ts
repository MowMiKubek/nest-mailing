import { Document } from "mongoose";

export interface ITextContent {
    text: string;
}

export interface IImageContent { 
    url: string;
    title: string;
}

export interface ICodeContent { 
    language: string;
    code: string;
}

export interface IContent extends Document, ITextContent, IImageContent, ICodeContent {
    type: string;
}
