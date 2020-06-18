// const Question = require('./question');
const connectServer = require('./connectServer');
// let Question;
// let connectServer;
let growupApi;
(function(){
    let instance;
    growupApi = function growupApi(){
        if(instance){
            return instance;
        }
        instance = this;

        // this.Question = Question;
        this.connectServer = connectServer;
       connectServer.yo=9;
       console.log(`yo=${connectServer.yo}`);

    };
}());

module.exports={
    growupApi,
    connectServer: connectServer ,
};