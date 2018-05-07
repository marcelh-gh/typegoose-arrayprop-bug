import mongoose from "mongoose";
import { tgDocTestModel } from "./tgDocTest.model";



async function createINdb() {
    try {
        const newDoc = new tgDocTestModel();
        await tgDocTestModel.register(newDoc);
    } catch (error) {

        console.log(error);
    }
}


async function main() {
    const urlToMongoDB = "mongodb://localhost/test";
    await mongoose.connect(urlToMongoDB);
    //const db = mongoose.connection;
    await createINdb();
    return 0;
}

//@ts-ignore
main(process)
    .then(process.exit)
    //@ts-ignore
    .catch(error => {
        console.log(error);
        process.exit(1);
    });
