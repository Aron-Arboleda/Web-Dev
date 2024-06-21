import express from "express"; // exporting the entire express module from the package
import routes from "./routes/index.mjs";

const app = express(); //express is a function so we it needs to be called to make an application

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000; //setting the port to 3000 if it's not set in the environment variable

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
}); //allows the server to listen to a port for incoming requests, this actually what starts up the express server on a specific port to listen for HTTP requests

app.get("/", (request, response) => {
	response.status(201).send({msg: "Hello World!"});
});