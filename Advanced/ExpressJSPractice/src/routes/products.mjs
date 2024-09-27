import { Router } from "express";

const router = Router();

router.get("/api/products", (request, response) => {
    console.log(request.headers.cookie);
    console.log(request.cookies);
    console.log(request.signedCookies.hello);
    if (request.signedCookies.hello && request.signedCookies.hello === "world") {
        return response.send([
            {id: 123, name: "Chicken Breast", price: 12.99}, 
            {id: 124, name: "Pig Feet", price: 800.99},
            {id: 126, name: "Puso ni Lester", price: 1005.99}
        ]);
    }
    return response.status(401).send({message: "Sorry, You need to have right cookies"});
});

export default router;
