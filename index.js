const sectionService = require('./data/sections');

const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const sessid = "e14e316cb5cbcae4320a834ebb234f56"

app.use(cors());

const actions = {
    getSectionQuestion: "getSectionQuestion",
    getSections: "getSections"
}

const getData = (action, ...args) => {

    switch (action) {
        case actions.getSections:
            return sectionService.getSections()
        case actions.getSectionQuestion:
            return sectionService.getSectionQuestion(...args)
    }
}

app.get("/", function(req, res) {
    const { action, sessid, sectionId, page } = req.query;

    const data = getData(action, sectionId, page);
    res.json({
        data: data,
        errors: [],
        status: "success"
    });
});

app.listen(port, () => {
    console.log("App listen on " + port)
})
