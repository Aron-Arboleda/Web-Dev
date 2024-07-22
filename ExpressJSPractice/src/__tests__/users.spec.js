/* eslint-disable no-undef */
import validator from 'express-validator';
import { getUserByIdHandler, createUserHandler } from "../handlers/users.mjs";
import { mockUsers } from "../utils/constants.mjs";

jest.mock('express-validator', () => ({
    validationResult: jest.fn(() => ({
        isEmpty: jest.fn(() => false),
        array: jest.fn(() => [{msg: "Invalid Username"}]),
    })),
}));

const mockRequest = {
    findUserIndex: 0
};

const mockResponse = {
    sendStatus: jest.fn(),
    send: jest.fn(),
    status: jest.fn(() => mockResponse),
};

/* eslint-disable no-undef */
describe('get users', () => {
    it('should get user by id', () => {
        getUserByIdHandler(mockRequest, mockResponse);
        expect(mockResponse.send).toHaveBeenCalled();
        expect(mockResponse.send).toHaveBeenCalledWith(mockUsers[0]);
        expect(mockResponse.send).toHaveBeenCalledTimes(1);
    });

    it('should call sendStatus with 404 when user not found', () => {
        mockRequest.findUserIndex = 100;
        getUserByIdHandler(mockRequest, mockResponse);
        expect(mockResponse.sendStatus).toHaveBeenCalled();
        expect(mockResponse.sendStatus).toHaveBeenCalledWith(404);
        expect(mockResponse.sendStatus).toHaveBeenCalledTimes(1);
        expect(mockResponse.send).not.toHaveBeenCalled();
    });
});

describe('create users', () => {
    const mockRequest = {

    };

    it('should send status of 400 when there are errors', async () => {
        await createUserHandler(mockRequest, mockResponse);
        expect(validator.validationResult).toHaveBeenCalled();
        expect(validator.validationResult).toHaveBeenCalledWith(mockRequest);
        expect(mockResponse.status).toHaveBeenCalledWith(401);
        expect(mockResponse.send).toHaveBeenCalledWith([{msg: "Invalid Username"}]);
    });
});

