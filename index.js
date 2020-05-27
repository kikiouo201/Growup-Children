const Question = require('./model/question');


//ADD
// Question.addQa(1, "question_text", "answer", "question_url", "知識", (event) => {
//     console.log("callback=" + JSON.stringify(event));
// });

// Question.addBook(1, "水果類", "單詞", (event) => {
//     console.log("callback=" + JSON.stringify(event));
// });

// Question.addBookContent(5, 16, (event) => {
//     console.log("callback=" + JSON.stringify(event));
// });


//SHOW
// Question.showPastQuestion(1, (event) => {
//     const data = JSON.parse(JSON.stringify(event));
//     const content = data.content;
//     content.forEach(element => {
//         if (element.question_text != null)
//             console.log("\nQ =" + JSON.stringify(element.question_text));
//         else
//             console.log("\nQ =" + JSON.stringify(element.question_url));

//         console.log("A =" + JSON.stringify(element.answer));
//     });
//     //  console.log("content =" + JSON.stringify(content)  );
// });

// Question.showBook(1, (event) => {
//     console.log("callback=" + JSON.stringify(event));
// });

// Question.showBookContent(5, (event) => {
//     console.log("callback=" + JSON.stringify(event));
// });


//DELETE
// Question.deleteBook(6, (event) => {
//         console.log("callback=" + JSON.stringify(event));
//     });

// Question.deleteBookContent(16,(event) => {
//     console.log("callback=" + JSON.stringify(event));
// });

// Question.deletePastQuestion(25, (event) => {
//     console.log("callback=" + JSON.stringify(event));
// });


//ALTER
// Question.alterBook(5,"水果類","",(event) => {
//     console.log("callback=" + JSON.stringify(event));
// });

// Question.alterBookContent(11,2,19,(event) => {
//     console.log("callback=" + JSON.stringify(event));
// });


