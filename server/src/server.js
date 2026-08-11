import app from "./app.js";
import "dotenv/config";
import connectDb from "./config/db.js";

const port = process.env.PORT;
console.log(process.env.PORT);

const startServer = async () => {
    try {

        await connectDb();

        app.listen(port, () => {
            console.log(`Listening Server on PORT: ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

startServer();