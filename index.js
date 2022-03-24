const sectionService = require('./data/sections');

const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const sessid = "e14e316cb5cbcae4320a834ebb234f56"

app.use(cors());

const actions = {
    getQuestions: "getQuestions",
    getQuestion: "getQuestion",
    getSections: "getSections",
    newQuestion: "newQuestion",
    search: "search"
};

const getData = ({
    action, page, size, sectionId, q, questionId
}) => {

    switch (action) {
        case actions.getSections:
            return sectionService.getSections()
        case actions.getQuestions:
            return sectionService.getSectionQuestion({
                page,
                size,
                sectionId
            })
        case actions.getQuestion:
            return sectionService.getQuestionById({
                questionId
            })
        case actions.search:
            return sectionService.search(q);
        case actions.newQuestion:
            return true
        default:
            return []
    }
}

app.get("/", function(req, res) {
    const { action, sessid, sectionId, page, size, q, questionId } = req.query;



    const data = getData({
        action,
        sectionId,
        page,
        size,
        q,
        questionId
    });

    res.json({
        data: data,
        errors: [],
        status: "success"
    });
});

app.post("/", function(req, res) {
    res.json({
        data: false,
        errors: ["ошбика сервераааа пот"],
        status: "success"
    });
})

app.listen(process.env.port, () => {
    console.log("App listen on " + port)
})
