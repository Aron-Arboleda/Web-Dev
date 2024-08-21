 // BACKEND FILE (POWERED BY EXPRESS-JS)

import express from "express"; // exporting the entire express module from the package
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const PORT = process.env.PORT || 3000; // port number

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

// Default route so that when user goest to localhost:3000/, index.html file will show
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/endpoint', (request, response) => {
    response.json({ message: 'Data from backend'}); // sending the data ("Data from backend")
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});
