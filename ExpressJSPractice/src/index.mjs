import express from "express"; // exporting the entire express module from the package
import routes from "./routes/index.mjs";
import cookieParser from "cookie-parser";
import session from "express-session";
import { mockUsers } from "./utils/constants.mjs";
import passport from "passport";
import mongoose from "mongoose";
import "./strategies/local-strategy.mjs";
import { User } from "./mongoose/schemas/user.mjs";

const app = express(); //express is a function so we it needs to be called to make an application

mongoose
    .connect("mongodb://localhost/express_tutorial")
    .then(() => console.log("Connected to the database"))
    .catch((err) => console.log(`Error ${err}`));

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

app.use(passport.initialize()); // to initialize the passport middleware
app.use(passport.session()); // attaches a dynamic user property to the request object called "user" to be used as a reference who the user is.

app.use(routes);

const PORT = process.env.PORT || 3000; //setting the port to 3000 if it's not set in the environment variable

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
}); //allows the server to listen to a port for incoming requests, this actually what starts up the express server on a specific port to listen for HTTP requests

app.get("/", async (request, response) => {
    //console.log(request.session);
    //console.log(request.session.id);
    //request.session.visited = true; //modifying the session to save on the browser
    //response.cookie("hello", "world", {maxAge: 60000 * 60 * 2, signed: true});
	try {
        for (const user of mockUsers) {
            const newUser = new User(user);
            await newUser.save();
        }
        response.status(201).send({msg: "Data transdered to database!"});
    } catch (err) {
        console.log(`Error: ${err}`);
        return response.sendStatus(401);
    }
});

app.post("/api/auth", passport.authenticate("local"), (request, response) => {
    response.sendStatus(200);
});

app.post("/api/auth/logout", (request, response) => {
    if (!request.user) return response.sendStatus(401);
    request.logout((err) => {
        if (err) return response.sendStatus(401);
        response.sendStatus(200);
    });
});
/** 
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
    return response.status(200).send(findUser);
});*/

app.get("/api/auth/status", (request, response) => {
    console.log("\nInside /api/auth/status");
    console.log(request.user);
    console.log(request.session);
    //request.sessionStore.get(request.sessionID, (err, session) => {
    //    console.log(session);
    //});
    //return request.session.user ? response.status(200).send({msg: "Logged in", user: request.session.user}) : response.status(401).send({msg: "Not Authenticated"});
    return request.user ? response.send(request.user) : response.sendStatus(401);
});

app.post("/api/cart", (request, response) => {
    if (!request.session.user) return response.sendStatus(401);
    const { body: item } = request;
    const { cart } = request.session;
    if (cart) {
        cart.push(item);
    } else {
        request.session.cart = [item];
    }
    return response.status(201).send(item);
});

app.get("/api/cart", (request, response) => {
    if (!request.session.user) return response.sendStatus(401);
    return response.status(201).send(request.session.cart ?? []);
});

