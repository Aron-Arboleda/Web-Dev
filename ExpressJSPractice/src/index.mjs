import express from "express"; // exporting the entire express module from the package
import routes from "./routes/index.mjs";
import cookieParser from "cookie-parser";

const expressApp = express(); //express is a function so we it needs to be called to make an application

expressApp.use(express.json());
expressApp.use(cookieParser("helloworld"));
expressApp.use(routes);

const PORT = process.env.PORT || 3000; //setting the port to 3000 if it's not set in the environment variable

expressApp.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
}); //allows the server to listen to a port for incoming requests, this actually what starts up the express server on a specific port to listen for HTTP requests

expressApp.get("/", (request, response) => {
    response.cookie("hello", "world", {maxAge: 60000 * 60 * 2, signed: true});
	response.status(201).send({msg: "Hello World!"});
});