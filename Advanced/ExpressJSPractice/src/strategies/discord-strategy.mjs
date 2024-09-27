import passport from "passport";
import { Strategy } from "passport-discord";
import { DiscordUser } from "../mongoose/schemas/discord-user.mjs"; 

passport.serializeUser((user, done) => {
    console.log("Inside serializeUser");
    console.log(user);
    done(null, user.id); //user.id is unique to search for the user in the database
}); // responsible for actually taking that user object that is validated and then storing it in the session.

passport.deserializeUser(async (id, done) => { //id is the user.id above
    console.log("\nInside deserializeUser");
    console.log("User id: " + id);
    try {
        const findUser = await DiscordUser.findById(id);
        return findUser ? done(null, findUser) : done(null, null);
    } catch (err) {
        return done(err, null);
    } 
}); // responsible for finding the user with the specific identifier and returning that into the user object inside the request object. 

export default passport.use(
    new Strategy({
        clientID: "1263462049200214047",
        clientSecret: "N9m5jSPXtOvcVlf9Daq9Kfawh0DZPCY7",
        callbackURL: "http://localhost:3000/api/auth/discord/redirect",
        scope: ["identify"] // keywords here differ with different applications
    }, 
    async (accessToken, refreshToken, profile, done) => {// profile is basically the user object
        // accessToken is used to make request to the API on behalf of the user
        // refreshToken is used to refresh the accessToken because it is short-lived.
        let findUser;
        try {
            findUser = await DiscordUser.findOne({ discordID: profile.id });
        } catch(err) {
            return done(err, null);
        }
        
        try {
            if (!findUser) {
                const newUser = new DiscordUser({
                    username: profile.username,
                    discordID: profile.id,
                });
                const newSavedUser = await newUser.save();
                return done(null, newSavedUser);
            } 
            return done(null, findUser);
        } catch (err){
            return done(err, null);
        }
    }) 
);