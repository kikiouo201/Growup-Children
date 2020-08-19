const { createRouter } = require('../wrapper/Exsocket');


const router = createRouter();


function people(app){
   

    return {
         showChild(child_key,callback){
            const jsonObject = {
               child_key: child_key,
            };
            router.on('show_child_key',jsonObject,callback);
            app.use(router);
        },
        showChildPosition(child_id,callback){
            const jsonObject = {
               child_id: child_id,
            };
            router.on('show_child_position',jsonObject,callback);
            app.use(router);
        },  alterChildPosition(child_id,longitude,latitude,callback){
            const jsonObject = {
               child_id: child_id,
               longitude: longitude,
               latitude: latitude,
            };
            router.on('alter_child_position',jsonObject,callback);
            app.use(router);
        }
    };
}




module.exports=people;