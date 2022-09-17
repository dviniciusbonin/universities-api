import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UniversityDocument = University & Document;

@Schema({
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
})
export class University {
    @Prop({required: true})
    alpha_two_code: string;

    @Prop({required: true})
    country: string;

    @Prop({required: true})
    name: string;

    @Prop()
    'state-province'?: string;
    
    @Prop({default: []})
    domains: string[];

    @Prop({default: []})
    web_pages: string[];
 }

 export const UniversitySchema = SchemaFactory.createForClass(University);