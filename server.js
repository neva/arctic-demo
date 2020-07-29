const express = require("express");
const arcticNode = require("arctic-node");

const app = express();
const port = 81;

const appID = "id2xy901kf"
const appToken = "w7udj9k0mu"
const callbackURL = "http://arcticxyz.ddns.net:81/"

app.use("/", arcticNode(appToken))

app.get("/", (req, res) => {

    if(req.authenticated) {
        res.send("Hello! " + req.user.name + " | " + req.user.email + " | " + req.user.id);
    } else {
        res.authenticate(appID, callbackURL);
    }

})

app.listen(port, () => { console.log("Server started!") })