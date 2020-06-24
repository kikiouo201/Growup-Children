const People = require('./people');
const exsocket= require('../wrapper/Exsocket');
const app=exsocket();

let Api;
(function(){
    let instance;
    Api = function Api(){
        if(instance){
            return instance;
        }
        instance = this;
        this.app = app;
    };
}());

module.exports={
    Api,
    app,
};