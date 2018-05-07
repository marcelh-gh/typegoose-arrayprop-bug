import { InstanceType, ModelType, Typegoose, arrayProp, prop, staticMethod } from "typegoose";
import { tgSubDoc } from "./tgSubDoc";


export class tgDocTest extends Typegoose {


    @prop({ required: true }) // no problem, since no array
    lastname: string;

    @prop({ required: true }) // no problem, since no array
    subdoc: tgSubDoc;

    @arrayProp({ items: String, required: true }) // no problem, since type is primitive
    arrayOfStrings: string[];

    @arrayProp({ items: tgSubDoc }) // no problem, because not declared as required
    optionalArrayOfSubDocs?: tgSubDoc[];

    // *******************************************************************************************************
    @arrayProp({ items: tgSubDoc, required: true }) // PROBLEM, because declared as REQUIRED and ARRAYPROP
    arrayOfSubDocs: tgSubDoc[];
    // *******************************************************************************************************



    @staticMethod
    static async register(this: ModelType<tgDocTest> & typeof tgDocTest, newDoc: InstanceType<tgDocTest>) {
        newDoc.lastname = "Test";
        newDoc.arrayOfStrings = ["one", "two", "three"];
        newDoc.subdoc = {
            date: new Date, details: { value2: 5 }
        };
        newDoc.arrayOfSubDocs = [{
            date: new Date, details: { value2: 1 }
        }, {
            date: new Date, details: { value2: 2 }
        }]
        return this.create(newDoc);
    }

}

export const tgDocTestModel = new tgDocTest().getModelForClass(tgDocTest, {
    schemaOptions: {
        collection: "test"
    }
});
