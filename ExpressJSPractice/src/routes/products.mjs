import { Router } from "express";

const router = Router();

router.get("/api/products", (request, response) => {
    response.send([
        {id: 123, name: "Chicken Breast", price: 12.99}, 
        {id: 124, name: "Pig Feet", price: 800.99},
        {id: 126, name: "Puso ni Lester", price: 1005.99}
    ]);
});

export default router;
