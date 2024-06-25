import express from "express"; // exporting the entire express module from the package
import routes from "./routes/index.mjs";
import cookieParser from "cookie-parser";
import session from "express-session";
import { mockUsers } from "./utils/constants.mjs";

const app = express(); //express is a function so we it needs to be called to make an application

app.use(express.json());
app.use(cookieParser("helloworld"));
app.use(session(
    {
        secret: "aron the dev", //used to sign the cookie
        saveUninitialized: false, //session stores, false means it will not save the session if the object's empty
        resave: false, //true means forcing a session to be saved at the session store even if its not modified at all
        cookie: { 
            maxAge: 60000 * 60 //to set the expiration time of the cookie
        }
    }
));
app.use(routes);

const loggedInUsers = [];

const PORT = process.env.PORT || 3000; //setting the port to 3000 if it's not set in the environment variable

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
}); //allows the server to listen to a port for incoming requests, this actually what starts up the express server on a specific port to listen for HTTP requests

app.get("/", (request, response) => {
    console.log(request.session);
    console.log(request.session.id);
    request.session.visited = true; //modifying the session to save on the browser
    //response.cookie("hello", "world", {maxAge: 60000 * 60 * 2, signed: true});
	response.status(201).send({msg: "Hello World!"});
});

app.post("/api/auth", (request, response) => {
    const {body: {username, password}} = request;
    const findUser = mockUsers.find(user => user.username === username);
    if (!findUser) {
        return response.status(401).send({msg: "User not found"});
    }
    if (findUser.password !== password) {
        return response.status(401).send({msg: "Invalid password"});
    }
    request.session.user = findUser;
    loggedInUsers.push(findUser);
    return response.status(200).send(findUser);
});

app.get("/api/auth/status", (request, response) => {
    request.sessionStore.get(request.sessionID, (err, session) => {
        console.log(session);
    });
    return request.session.user ? response.status(200).send({msg: "Logged in", user: request.session.user}) : response.status(401).send({msg: "Not Authenticated"});
});

app.get("/api/auth/loggedInUsers", (request, response) => {
    if (loggedInUsers.length === 0) {
        return response.status(200).send({msg: "No users logged in"});
    }
    for (let i = 0; i < loggedInUsers.length; i++) {
        console.log("\n" + (i + 1) + ". \n");
        console.log(loggedInUsers[i]);
    }
    return response.status(200).send(loggedInUsers);
});