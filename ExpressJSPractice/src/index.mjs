import express from "express"; // exporting the entire express module from the package

const app = express(); //express is a function so we it needs to be called to make an application

app.use(express.json());

const loggingMiddleware = (request, response, next) => {
    console.log(`${request.method} - ${request.url}`);
    next(); //function that you call to continue reading to the next middleware
};

const resolveIndexByUserId = (request, response, next) => {
    const { params: {id} } = request;

    const parsedId = parseInt(id);
    if (isNaN(parsedId)) return response.sendStatus(400);

    const findUserIndex = mockUsers.findIndex(user => user.id === parsedId);
    if (findUserIndex === -1) return response.sendStatus(404);
    request.findUserIndex = findUserIndex;
    next();
};

app.use(loggingMiddleware); //implemented from here until it reaches the bottom

const PORT = process.env.PORT || 3000; //setting the port to 3000 if it's not set in the environment variable
const mockUsers = [
    {id: 1, username: "john", displayName: "John"}, 
    {id: 2, username: "jane", displayName: "Jane"},
    {id: 3, username: "lester", displayName: "Lester"},
    {id: 4, username: "hannah", displayName: "Hannah"}, 
    {id: 5, username: "harvey", displayName: "Harvey"},
    {id: 6, username: "edes", displayName: "Edes"},
    {id: 7, username: "kemj", displayName: "Kemj"}, 
    {id: 8, username: "psalm", displayName: "Psalm"},
    {id: 9, username: "mark", displayName: "Mark"}
];

app.post("/api/users", (request, response) => {
    const { body } = request;
    const newUser = {
        id: mockUsers[mockUsers.length - 1].id + 1, ...body
    };
    mockUsers.push(newUser);
    return response.status(201).send(newUser);
});

app.get("/", loggingMiddleware, (request, response) => {
	response.status(201).send({msg: "Hello World!"});
});

app.get("/api/users", (request, response) => {
    const {query: {filter, value}} = request;
    if (filter && value) return response.send(mockUsers.filter(user => user[filter].includes(value)));
    return response.send(mockUsers);
});

app.get("/api/users/:id", resolveIndexByUserId, (request, response) => {
    const { findUserIndex } = request;
    return response.send(mockUsers[findUserIndex]);
});

app.put("/api/users/:id", resolveIndexByUserId, (request, response) => {
    const { body, findUserIndex } = request;
    mockUsers[findUserIndex] = { id: mockUsers[findUserIndex].id, ...body};
    return response.status(200).send(mockUsers);
});

app.patch("/api/users/:id", resolveIndexByUserId, (request, response) => {
    const { body, findUserIndex } = request;
    mockUsers[findUserIndex] = { ...mockUsers[findUserIndex], ...body};
    return response.status(200).send(mockUsers);
});

app.delete("/api/users/:id", resolveIndexByUserId, (request, response) => {
    const { findUserIndex } = request;
    mockUsers.splice(findUserIndex, 1);
    return response.status(200).send(mockUsers);
});


app.get("/api/products", (request, response) => {
    response.send([
        {id: 123, name: "Chicken Breast", price: 12.99}, 
        {id: 124, name: "Pig Feet", price: 800.99},
        {id: 126, name: "Puso ni Lester", price: 1005.99}
    ]);
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
}); //allows the server to listen to a port for incoming requests, this actually what starts up the express server on a specific port to listen for HTTP requests