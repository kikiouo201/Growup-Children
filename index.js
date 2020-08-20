const api = require('./model/api');
//ADD




// api.Question.addQuiz(5, (event) => {
//    // console.log("addQuiz=" + JSON.stringify(event));
//     const data = JSON.parse(JSON.stringify(event));
//     const contents = data.content;        
//     contents.forEach(content => {
//       content.choose = content.options2;
//     });
//     console.log("contents=" + JSON.stringify(contents));
//    conten = contents;
// //    api.Question.addQuizRecord(1,"水果類測驗1",10,3,conten,(event) => {
// //     console.log("addQuizRecord=" + JSON.stringify(event));
// //   });  
// });
// api.Question.addQuizRecord(1,"水果類測驗1",10,3,conten,(event) => {
//         console.log("addQuizRecord=" + JSON.stringify(event));
//       });  



// api.Question.addQuizRecord(1,"yo",10,3, (event) => {
//     console.log("addQuizRecord=" + JSON.stringify(event));
// });
  
// api.Question.addQa(1, "question_text", "answer", "./still-image1.jpg", "知識", (event) => {
//     console.log("callback=" + JSON.stringify(event));
// });

// api.Question.addBook(1, "水果類", "單詞", (event) => {
//     console.log("callback=" + JSON.stringify(event));
// });

// api.Question.addBookContent(5, 100, (event) => {
//     console.log("callback=" + JSON.stringify(event));
// });


//SHOW
// api.People.showChildGoodBabyTotalValue(1,(event) => {
//         console.log("callback=" + JSON.stringify(event));
// });

api.People.showChildGoodBabyDayValue(1,(event) => {
    console.log("callback=" + JSON.stringify(event));
});

// api.People.showChildPosition(1,(event) => {
//     console.log("callback=" + JSON.stringify(event));
// });

// api.Question.showPictureBook(1,(event) => {
//             console.log("callback=" + JSON.stringify(event));
// });

// api.Level.showLevel(1, (event) => {
//               const data = JSON.parse(JSON.stringify(event));
//               const content = data.content;        
//               console.log("showZhuyinLevel =" + JSON.stringify(content)  );       
//     });
// api.Question.showQuizContent(1, (event) => {
//           const data = JSON.parse(JSON.stringify(event));
//           const content = data.content;        
//           console.log("showQuizContent =" + JSON.stringify(content)  );       
// });


// api.Question.showQuizRecord(1, (event) => {
//   const data = JSON.parse(JSON.stringify(event));
//   const content = data.content;
  
//     console.log("showQuizRecord =" + JSON.stringify(content)  );
    
// });

// api.People.showChild('2nih42h3nn7k57nbu33', (event) => {
//       const data = JSON.parse(JSON.stringify(event));
//       const content = data.content;
        
//       console.log("content =" + JSON.stringify(content)  );
          
// });
    
// api.Question.showPastQuestion(1, (event) => {
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

// api.Question.showBook(1, (event) => {
//     console.log("callback=" + JSON.stringify(event));
// });

// api.Question.showBookContent(5, (event) => {
//     console.log("callback=" + JSON.stringify(event));
// })

//DELETE
// api.Question.deleteBook(6, (event) => {
//         console.log("callback=" + JSON.stringify(event));
//     });

// api.Question.deleteBookContent(16,(event) => {
//     console.log("callback=" + JSON.stringify(event));
// });

// api.Question.deletePastQuestion(25, (event) => {
//     console.log("callback=" + JSON.stringify(event));
// });


//ALTER
// api.Question.alterBook(5,"水果類","",(event) => {
//     console.log("callback=" + JSON.stringify(event));
// });

// api.Question.alterBookContent(11,2,19,(event) => {
//     console.log("callback=" + JSON.stringify(event));
// });

// api.Level.alterLevel(1,"ㄍ",(event) => {
//         console.log("callback=" + JSON.stringify(event));
//       });
    

// api.People.alterChildPosition(1,'121.34','24.98',(event) => {
//             console.log("callback=" + JSON.stringify(event));
//           });
