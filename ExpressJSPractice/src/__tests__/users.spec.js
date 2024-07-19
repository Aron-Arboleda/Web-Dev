/* eslint-disable no-undef */
import { getUserByIdHandler } from "../handlers/users.mjs";

const mockRequest = {
    findUserIndex: 0
};

const mockResponse = {
    sendStatus: jest.fn(),
    send: jest.fn()
};

/* eslint-disable no-undef */
describe('get users', () => {
    it('should get user by id', () => {
        getUserByIdHandler(mockRequest, mockResponse);
    });
});

