const WebSocket = require('ws');
const util = require('util');
const { join } = require('path');
const { json } = require('express');


function Exsocket() {

let ws = new WebSocket('ws://localhost:2000');
//let ws = new WebSocket('ws://growup.mcu.yokikiyo.space');

const workQueues= new Map();
const sendQueues = new Map();
const app = {
    use(router) {
        console.log("router.workQueues"+router);
      router.workQueues.forEach((event, callback) => {
        if (workQueues.has(event)) throw new Error('Regist duplicate event in this application.');
       //console.log(event);
        workQueues.set(event, callback);
      });
      router.sendQueues.forEach((event, json) => {
        if (sendQueues.has(event)) throw new Error('Regist duplicate event in this application.');
      console.log("sendQueues=");
        console.log(event);
        sendQueues.set(event, json);
      });
    
  
    },
  };

ws.onopen = (req) => {

    console.log('open connection');

    sendMes();
}
//接收 Server 發送的訊息
ws.onmessage = event => {
    console.log('onmessage');

    const data = JSON.parse(event.data);
    console.log(data.event);
    console.log(workQueues);

    const workQueu = workQueues.get(data.event);
    workQueu(data);
    //console.log("data.event=");
    //console.log(workQueues.get(data.event));

    // for(let i=0 ;i<workQueues.size;i++){
    //     if (workQueue[i].event == owo.event) {
    //         workQueue[i].callback(owo);
    //         console.log("yo");
    //         workQueue.splice(i,1);
    //         console.log(`YoworkQueue.length = ${workQueue.length}`);
    //         if(workQueue.length > 0) sendMes();
    //     }

    // }
    
}

//關閉後執行的動作，指定一個 function 會在連結中斷後執行
ws.onclose = () => {
    console.log('close connection')
}


function sendMes(){

    console.log(`workQueue.length = ${workQueues.size}`);

    if (sendQueues.size > 0) {
       sendQueues.forEach((event, json)  => {
           const str=JSON.stringify(json);
           console.log("str"+str);
        ws.send(str);
       })
     
    }
    return '';
}

return app;


}

Exsocket.createRouter = () => {

   const workQueues = new Map();
   const sendQueues = new Map();
   
  return {
    on(event, content, callback) {
     if (workQueues.has(event)) throw new Error('Regist duplicate event in this router.');

      let json = {};
      json.event = event;
      json.content = content;
  
      workQueues.set(
        callback,  
        event,
          
      );
      sendQueues.set(
          event,
          json,
      );
      console.log("createRouter=");
      console.log(sendQueues);
    },
    workQueues,
    sendQueues,

  };
}


module.exports = Exsocket;