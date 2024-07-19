import { mockUsers } from "../utils/constants.mjs";

export const getUserByIdHandler = (request, response) => {
    const { findUserIndex } = request;
    return response.send(mockUsers[findUserIndex]);
};