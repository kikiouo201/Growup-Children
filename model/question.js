const api =require('./api')
const { createRouter } = require('../wrapper/Exsocket');
const router = createRouter();

const FAVORITE_QUESTION = 'favorite_question';

const ADD_QA = 'add_qa';
const SHOW_PAST_QUESTION = 'show_past_question';
const DELETE_PAST_QUESTION = 'delete_past_question';

const ADD_BOOK = 'add_book';
const SHOW_BOOK = 'show_book';
const ALTER_BOOK = 'alter_book';
const DELETE_BOOK = 'delete_book';

const ADD_BOOK_CONTENT = 'add_book_content';
const ALTER_BOOK_CONTENT = 'alter_book_content';
const SHOW_BOOK_CONTENT = 'show_book_content';
const DELETE_BOOK_CONTENT = 'delete_book_content';


// const SHOW_CHILD = 'show_child_key';

// function showChild(child_key,callback){
//     const jsonObject = {
//        child_key: child_key,
//     };
//     growupApi.connectServer.sendToServer(SHOW_CHILD,jsonObject,callback);
// }

const ADD_QUIZ = 'add_quiz';

function addQuiz(book_id,callback){
    const jsonObject = {
        book_id: book_id,
    };
    console.log(`yo=${growupApi.connectServer.yo}`);
    //console.log('growupApi.connectServer.yo='+growupApi);
    router.on(ADD_QUIZ,jsonObject,callback);
    api.app.use(router);
}


const ADD_QUIZ_RECORD = 'add_quiz_record';

function addQuizRecord(child_id,name,amount,correct_amount,quiz,callback){
    const jsonObject = {
        child_id: child_id,
        total_time: 10,
        name: name,
        amount: amount,
        correct_amount: correct_amount,
        quizs: quiz,
    };
    console.log("now addQR place!")
    router.on(ADD_QUIZ_RECORD,jsonObject,callback);
    api.app.use(router);
}

const SHOW_QUIZ_CONTENT = 'show_quiz_content';
function showQuizContent(quiz_record_id,callback){
    const jsonObject = {
        quiz_record_id: quiz_record_id,
    };
    router.on(SHOW_QUIZ_CONTENT,jsonObject,callback);
    api.app.use(router);
}

const SHOW_QUIZ_RECORD = 'show_quiz_record';
function showQuizRecord(child_id,callback){
    const jsonObject = {
        child_id: child_id,
    };
    router.on(SHOW_QUIZ_RECORD,jsonObject,callback);
    api.app.use(router);
}


function addQa(child_id, question_text, answer, question_url, category,callback){
    const jsonObject = {
        child_id: child_id,
        question_text: question_text, 
        answer: answer,
        question_url: question_url ,
        category: category,
    };
    
    router.on(ADD_QA,jsonObject,callback);
    api.app.use(router);
}



function deletePastQuestion(book_content_id, callback){
    const jsonObject = {
        id: book_content_id,
    };
    
    router.on(DELETE_PAST_QUESTION,jsonObject,callback);
    api.app.use(router);
}

function showPastQuestion(child_id, callback){
    const jsonObject = {
        child_id: child_id,
    };
    
    router.on(SHOW_PAST_QUESTION,jsonObject,callback);
    api.app.use(router);
}

function addBook(child_id, name, category, callback){
    const jsonObject = {
        child_id: child_id,
        name: name,
        category:category,
    };
    
    router.on(ADD_BOOK,jsonObject,callback);
    api.app.use(router);
}

function deleteBook(book_id, callback){
    const jsonObject = {
        id: book_id,
    };
    
    router.on(DELETE_BOOK,jsonObject,callback);
    api.app.use(router);
}

function showBook(child_id, callback){
    const jsonObject = {
        child_id: child_id,
    };
    
    router.on(SHOW_BOOK,jsonObject,callback);
    api.app.use(router);
}

function alterBook(book_id, name, category, callback){
    const jsonObject = {
        id: book_id,
    };
    if(name != ''){
        jsonObject.name = name;
    }
    if(category != ''){
        jsonObject.category = category;
    }
    
    router.on(ALTER_BOOK,jsonObject,callback);
    api.app.use(router);
}


function addBookContent(book_id,qa_id,callback){

    const jsonObject = {
        book_id: book_id,
        qa_id: qa_id,
    };
    router.on(ADD_BOOK_CONTENT,jsonObject,callback);
    api.app.use(router);

}

function deleteBookContent(book_content_id, callback){

    const jsonObject = {
        id: book_content_id,
    };
    router.on(DELETE_BOOK_CONTENT,jsonObject,callback);
    api.app.use(router);
}



function showBookContent(book_id,callback){

    const jsonObject = {
        id: book_id,
    };
    router.on(SHOW_BOOK_CONTENT,jsonObject,callback);
    api.app.use(router);
}

function alterBookContent(id, book_id, qa_id, callback){

    const jsonObject = {
        id: id,
    };

    if(book_id != 0){
        jsonObject.book_id = book_id;
    }
    if(qa_id != 0){
        jsonObject.qa_id = qa_id;
    }
    router.on(ALTER_BOOK_CONTENT,jsonObject,callback);
    api.app.use(router);
}


module.exports={
    addQa,
    deletePastQuestion,
    showPastQuestion,
    addBook,
    deleteBook,
    showBook,
    alterBook,
    addBookContent,
    deleteBookContent,
    showBookContent,
    alterBookContent,
    showQuizContent,
    showQuizRecord,
    addQuizRecord,
    addQuiz,
    
}