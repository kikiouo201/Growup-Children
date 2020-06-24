//const Question = require('./model/question');
const People = require('./model/people');

//ADD




// Question.addQuiz(5, (event) => {
//    // console.log("addQuiz=" + JSON.stringify(event));
//     const data = JSON.parse(JSON.stringify(event));
//     const contents = data.content;        
//     contents.forEach(content => {
//       content.choose = content.options2;
//     });
//     console.log("contents=" + JSON.stringify(contents));
//    conten = contents;
//    Question.addQuizRecord(1,"水果類測驗1",10,3,conten,(event) => {
//     console.log("addQuizRecord=" + JSON.stringify(event));
//   });  
// });




// Question.addQuizRecord(1,"yo",10,3, (event) => {
//     console.log("addQuizRecord=" + JSON.stringify(event));
// });
  
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

// Question.showQuizContent(1, (event) => {
//           const data = JSON.parse(JSON.stringify(event));
//           const content = data.content;        
//           console.log("showQuizContent =" + JSON.stringify(content)  );       
// });

// Question.showQuizRecord(1, (event) => {
//   const data = JSON.parse(JSON.stringify(event));
//   const content = data.content;
  
//     console.log("showQuizRecord =" + JSON.stringify(content)  );
    
// });

People.showChild('2nih42h3nn7k57nbu33', (event) => {
      const data = JSON.parse(JSON.stringify(event));
      const content = data.content;
        
      console.log("content =" + JSON.stringify(content)  );
          
});
    
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


