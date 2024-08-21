const button1 = document.getElementById("button1");

button1.addEventListener("click", () => {
    fetch('/api/endpoint', { // using fetch (a native library to communicate with the backend)
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())  // Convert response to JSON
    .then(data => {
        button1.innerHTML = data.message;
        console.log('Success:', data);  // Handle success
    })
    .catch(error => {
        console.error('Error:', error);  // Handle errors
    });
});