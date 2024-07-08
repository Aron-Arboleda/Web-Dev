import passport from "passport";
import { Strategy } from "passport-local";
import { mockUsers } from "../utils/constants.mjs";
import { User } from "../mongoose/schemas/user.mjs";
import { comparePassword } from "../utils/helpers.mjs";

passport.serializeUser((user, done) => {
    console.log("Inside serializeUser");
    console.log(user);
    done(null, user.id); //user.id is unique to search for the user in the database
}); // responsible for actually taking that user object that is validated and then storing it in the session.

passport.deserializeUser(async (id, done) => { //id is the user.id above
    console.log("\nInside deserializeUser");
    console.log("User id: " + id);
    try {
        const findUser = await User.findById(id);
        if (!findUser) throw new Error("User not found.");
        done(null, findUser);
    } catch (err) {
        done(err, null);
    } 
}); // responsible for finding the user with the specific identifier and returning that into the user object inside the request object. 

export default passport.use(
    new Strategy(async (username, password, done) => {
        try {
            const findUser = await User.findOne({ username });
            if (!findUser) throw new Error("User not found.");
            if (!comparePassword(password, findUser.password)) throw new Error("Bad credentials.");
            done(null, findUser);
        } catch (err) {
            done(err, null);
        }
    })
); // middleware that is used to authenticate the user (logging in)


/**
 * 
 *  const findUser = mockUsers.find(user => user.username === username);
            if (!findUser) throw new Error("User not found.");
            if (findUser.password !== password) throw new Error("Invalid credentials.");
            done(null, findUser);
 */