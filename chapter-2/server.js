// The address of this server on the network is:
// URL -> http://localhost:8383
// IP -> 127.0.0.1:8383
const express = require("express")
const app = express()
const port = 8383

// ENDPOINT - HTTP methods & routes
// The method tells what kind of request it is and the route (or path) directs the request to the right code to respond. These routes are called endpoints.
app.get("/", (req, res) => {
    console.log("Jai Shree Ram!", req.method);
    res.sendStatus(200)
})

app.get("/moksh", (req, res) => {
    res.send("Jai Shree Ram, Jai Bajrangbali!")
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
