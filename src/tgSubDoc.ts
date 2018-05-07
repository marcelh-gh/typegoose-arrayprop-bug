
import { arrayProp, prop } from 'typegoose';


export class tgSubDocDetails {
    @prop()
    value1?: string;

    @prop({ required: true })
    value2: number;
}


export class tgSubDoc {
    @prop({ required: true })
    date: Date;

    @prop()
    value?: number;

    @arrayProp({ items: tgSubDocDetails })
    details?: tgSubDocDetails;
}
