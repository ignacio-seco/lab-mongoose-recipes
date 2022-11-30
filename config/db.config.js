import mongoose from "mongoose"
const MONGODB_URI = 'mongodb://127.0.0.1:27017/recipe-app';

export async function connect() {
    try {
        const dbConnect = await mongoose.connect(MONGODB_URI)

        console.log(`Conectado ao DB: ${dbConnect.connection.name}`)
    } catch (error) {
        console.log(error)
    }
}