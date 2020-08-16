const { createRouter } = require('../wrapper/Exsocket');


const router = createRouter();


function level(app){
   

    return {
         showZhuyinLevel(child_id,callback){
            const jsonObject = {
               child_id: child_id,
            };
            router.on('show_zhuyin_level',jsonObject,callback);
            app.use(router);
        },
        alterZhuyinLevel(child_id,level_name,ispass,callback){
            const jsonObject = {
               child_id: child_id,
               level_name:level_name,
               ispass:1,
            };
            router.on('alter_zhuyin_level',jsonObject,callback);
            app.use(router);
        }


    };
}




module.exports=level;