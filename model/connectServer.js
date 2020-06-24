const WebSocket = require('ws');
const util = require('util');
//使用 WebSocket 的網址向 Server 開啟連結
//let ws = new WebSocket('ws://localhost:2000');
let ws = new WebSocket('ws://growup.mcu.yokikiyo.space');

const workQueue = [];
//開啟後執行的動作，指定一個 function 會在連結 WebSocket 後執行


let open = 0;

ws.onopen = (req) => {

    console.log('open connection');

    sendMes();
}
//接收 Server 發送的訊息
ws.onmessage = event => {
    console.log('onmessage');

    const data = JSON.stringify(event);
    const yo = JSON.parse(data);
    // console.log(yo.data);
    const owo = JSON.parse(yo.data);
    // console.log(owo.content);

    for(let i=0 ;i<workQueue.length;i++){
        if (workQueue[i].event == owo.event) {
            workQueue[i].callback(owo);
            console.log("yo");
            workQueue.splice(i,1);
            console.log(`YoworkQueue.length = ${workQueue.length}`);
            if(workQueue.length > 0) sendMes();
        }

    }
    
}









//關閉後執行的動作，指定一個 function 會在連結中斷後執行
ws.onclose = () => {
    console.log('close connection')
}


function sendToServer(event, content, callback) {


    let json = {};
    json.event = event;
    json.content = content;

    workQueue.push({
        event: event,
        json: json,
        callback: callback,
    });
   
}

function sendMes() {

    workQueue.forEach(work => {
        console.log(work.json);
    });
    console.log(`workQueue.length = ${workQueue.length}`);

    if (workQueue.length > 0) {
       workQueue.forEach(work => {
           
        ws.send(JSON.stringify(work.json));
       })
     
    }
    return '';
}

let yo=10;
module.exports = {
    yo,
    sendToServer,
    onopen: ws.onopen,
    onclose: ws.onclose,
};