const sections = require("./data");

const getSectionQuestion = ({
    sectionId,
    page,
    size
}) => {
    const section = sections.find(s => "" + s.ID === "" + sectionId);

    if (!section) return [];

    const start = page - 1;

    const data = {
        ID: section.ID,
        NAME: section.NAME,
        questions: section.questions.slice(start * size, page * size),
        page: Number(page),
        pages: Math.ceil(section.questions.length / size)
    };

    return data;
};

const getSections = () => sections.map(
    section => ({ID: section.ID, NAME: section.NAME})
);

const search = q => {
    const match = (q, header, body) => {
        return new RegExp(q.toLowerCase())
            .test(header.toLowerCase() + " " + body.toLowerCase())
    };

    let questions = [];

    sections.forEach(section => questions = [...questions, ...section.questions]);

    return questions.filter(question => {
        return match(q, question.NAME, question.DETAIL_TEXT)
        }
    );
}

const getQuestionById = ({questionId}) => {

    const question = sections.reduce((
        acc, next
    ) => {
        return [...acc, ...next.questions]
    }, []).find(q => q.ID === +questionId);

    return question || null

}



const sectionsService = {
    getSectionQuestion,
    getSections,
    getQuestionById,
    search
};

module.exports = sectionsService;
