const api =require('./api')
const { createRouter } = require('../wrapper/Exsocket');



const router = createRouter();

const SHOW_CHILD = 'show_child_key';

function showChild(child_key,callback){
    const jsonObject = {
       child_key: child_key,
    };
    router.on('show_child_key',jsonObject,callback);
    api.app.use(router);
}


module.exports={
    showChild,
    router,
}