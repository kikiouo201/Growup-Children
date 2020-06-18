const growupApi = require('./growupApi');


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


const SHOW_CHILD = 'show_child_key';

function showChild(child_key,callback){
    const jsonObject = {
       child_key: child_key,
    };
    growupApi.connectServer.sendToServer(SHOW_CHILD,jsonObject,callback);
}

const ADD_QUIZ = 'add_quiz';

function addQuiz(book_id,callback){
    const jsonObject = {
        book_id: book_id,
    };
    console.log(`yo=${growupApi.connectServer.yo}`);
    //console.log('growupApi.connectServer.yo='+growupApi);
    growupApi.connectServer.sendToServer(ADD_QUIZ,jsonObject,callback);

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
    growupApi.connectServer.sendToServer(ADD_QUIZ_RECORD,jsonObject,callback);
   
}

const SHOW_QUIZ_CONTENT = 'show_quiz_content';
function showQuizContent(quiz_record_id,callback){
    const jsonObject = {
        quiz_record_id: quiz_record_id,
    };
    growupApi.connectServer.sendToServer(SHOW_QUIZ_CONTENT,jsonObject,callback);
}

const SHOW_QUIZ_RECORD = 'show_quiz_record';
function showQuizRecord(child_id,callback){
    const jsonObject = {
        child_id: child_id,
    };
    growupApi.connectServer.sendToServer(SHOW_QUIZ_RECORD,jsonObject,callback);
}


function addQa(child_id, question_text, answer, question_url, category,callback){
    const jsonObject = {
        child_id: child_id,
        question_text: question_text, 
        answer: answer,
        question_url: question_url ,
        category: category,
    };
    
    growupApi.connectServer.sendToServer(ADD_QA,jsonObject,callback);
}



function deletePastQuestion(book_content_id, callback){
    const jsonObject = {
        id: book_content_id,
    };
    
    growupApi.connectServer.sendToServer(DELETE_PAST_QUESTION,jsonObject,callback);
}

function showPastQuestion(child_id, callback){
    const jsonObject = {
        child_id: child_id,
    };
    
    growupApi.connectServer.sendToServer(SHOW_PAST_QUESTION,jsonObject,callback);
}

function addBook(child_id, name, category, callback){
    const jsonObject = {
        child_id: child_id,
        name: name,
        category:category,
    };
    
    growupApi.connectServer.sendToServer(ADD_BOOK,jsonObject,callback);
}

function deleteBook(book_id, callback){
    const jsonObject = {
        id: book_id,
    };
    
    growupApi.connectServer.sendToServer(DELETE_BOOK,jsonObject,callback);
}

function showBook(child_id, callback){
    const jsonObject = {
        child_id: child_id,
    };
    
    growupApi.connectServer.sendToServer(SHOW_BOOK,jsonObject,callback);
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
    
    growupApi.connectServer.sendToServer(ALTER_BOOK,jsonObject,callback);
}


function addBookContent(book_id,qa_id,callback){

    const jsonObject = {
        book_id: book_id,
        qa_id: qa_id,
    };
    growupApi.connectServer.sendToServer(ADD_BOOK_CONTENT,jsonObject,callback);

}

function deleteBookContent(book_content_id, callback){

    const jsonObject = {
        id: book_content_id,
    };
    growupApi.connectServer.sendToServer(DELETE_BOOK_CONTENT,jsonObject,callback);

}



function showBookContent(book_id,callback){

    const jsonObject = {
        id: book_id,
    };
    growupApi.connectServer.sendToServer(SHOW_BOOK_CONTENT,jsonObject,callback);

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
    growupApi.connectServer.sendToServer(ALTER_BOOK_CONTENT,jsonObject,callback);

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
    showChild,
    showQuizContent,
    showQuizRecord,
    addQuizRecord,
    addQuiz,
    
}