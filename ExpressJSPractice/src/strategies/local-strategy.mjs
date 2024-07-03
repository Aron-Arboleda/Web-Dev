import passport from "passport";
import { Strategy } from "passport-local";
import { mockUsers } from "../utils/constants.mjs";

passport.serializeUser((user, done) => {
    console.log("Inside serializeUser");
    console.log(user);
    done(null, user.id); //user.id is unique to search for the user in the database
}); // responsible for actually taking that user object that is validated and then storing it in the session.

passport.deserializeUser((id, done) => { //id is the user.id above
    console.log("\nInside deserializeUser");
    console.log("User id: " + id);
    try {
        const findUser = mockUsers.find(user => user.id === id);
        if (!findUser) throw new Error("User not found.");
        done(null, findUser);
    } catch (err) {
        done(err, null);
    } 
}); // responsible for finding the user with the specific identifier and returning that into the user object inside the request object. 

export default passport.use(
    new Strategy((username, password, done) => {
        console.log("username: " + username);
        console.log("password: " + password);
        try {
            const findUser = mockUsers.find(user => user.username === username);
            if (!findUser) throw new Error("User not found.");
            if (findUser.password !== password) throw new Error("Invalid credentials.");
            done(null, findUser);
        } catch (err) {
            done(err, null);
        }
    })
); // middleware that is used to authenticate the user (logging in)