// The address of this server on the network is:
// URL -> http://localhost:8383
// IP -> 127.0.0.1:8383
const express = require("express")
const app = express()
const port = 8383


const data = ["Ajay"]

app.use(express.json())

// ENDPOINT - HTTP methods & routes
// The method tells what kind of request it is and the route (or path) directs the request to the right code to respond. These routes are called endpoints.
app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Home Page</title>
            <style>
                body {
                    background-color: red;
                    text-align: center;
                    color: white;
                    font-family: sans-serif;
                }
            </style>
        </head>
        <body>
            <h1>Home Page</h1>
            <h2>Data:</h2>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard">Dashboard</a>
        </body>
        </html>
    `);
})

// Website endpoints (these endpoints are for sending back html and they typically come when a user enters a url in the browser)
app.get("/dashboard", (req, res) => {
    res.send(`
        <h1>DashBoard</h1>
        <a href="/">Home</a>
        `)

})

// Api endpoints(Non - visual)
// CRUD Mehtods
// GET => Read/Retrieve
// POST => Create
// PUT => Update
// DELETE => Delete
app.get("/api/data", (req, res) => {
    res.send(data)
})

app.post("/api/data", (req, res) => {
    const newEntry = req.body
    console.log(newEntry);
    data.push(newEntry.name)

    res.sendStatus(201)
})

app.delete("/api/data", (req, res) => {
    data.pop()
})


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})



