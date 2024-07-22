import { matchedData, validationResult } from "express-validator";
import { mockUsers } from "../utils/constants.mjs";
import { hashPassword } from "../utils/helpers.mjs";
import { User } from "../mongoose/schemas/user.mjs";

export const getUserByIdHandler = (request, response) => {
    const { findUserIndex } = request;
    if (!mockUsers[findUserIndex]) return response.sendStatus(404);
    return response.send(mockUsers[findUserIndex]);
};

export const createUserHandler = async (request, response) => {
    const result = validationResult(request);
    if (!result.isEmpty()) return response.status(401).send(result.array());
    const data = matchedData(request); // alternate to const { body } = request;
    data.password = hashPassword(data.password);
    const newUser = new User(data);
    try {
        const savedUser = await newUser.save();
        return response.status(200).send(savedUser);
    } catch (err) {
        return response.sendStatus(401);
    }
};