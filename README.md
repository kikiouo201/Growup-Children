# Growup-Children

此系統為孩童端與後端連結傳遞資料的部分，目前此部分已被放進孩童端。使用node.js建立客戶端的websocket連線。

## 系統特色
「GrowUp學習趣」系統結合科技產品、爬蟲技術與政府開放資料，提供孩童多元的教育資源，並運用人工智慧物聯網中的影像辨識與語音辨識技術，讓孩童能夠自主的探索生活的環境與認知新事物，同時根據幼稚園課程綱要，設計遊戲式闖關關卡提早培養孩童認知圖像符號與發音助於孩童到上學年紀時快速銜接學習內容。「GrowUp學習趣」系統使用Android Studio SDK為家長開發追蹤孩童學習歷程分析的行動APP，根據孩童學習的紀錄整合文化部開放資料，提供家長為孩童推薦補助教材，並以全國圖書目錄推薦家長孩童學習相關的書籍，另外也將孩童的學習紀錄視覺化呈現於行動APP，幫助家長隨時追蹤孩童的學習狀況。

## 系統開發工具與技術
本專題利用Raspberry pi與Android Studio SDK系統環境開發工具，結合Electron、人工智慧物聯網、語音辨識、影像辨識、語音合成、爬蟲、雲端儲存與FCM推播等技術，並整合文化部、教育部與政府開放資料庫，建置符合學齡前孩童基礎知識學習以及孩童學習分析之系統。

## 系統功能簡介
本專題利用Raspberry pi、Android Studio SDK與AIOT人工智慧物聯網技術、並結合文化部和教育部等政府開放資料庫，建置一套學齡前學習機與家長行動APP「GrowUp學習趣」系統。

![圖片 1](https://user-images.githubusercontent.com/40735651/110289820-eee38c00-8024-11eb-9933-2715db1ae399.png)

（一）	AI隨問隨答模組
AI隨問隨答模組利用AI語音辨識與影像辨識結合爬蟲技術和國語辭典簡編本，讓孩童能夠盡情的向學習機詢問問題，系統將問題的相關圖片以及解釋呈現在學習機上，並同步語音念出解釋。此外系統也結合兒童文化館開放資料，孩童可以即時看到問題相關的繪本，讓喜歡發問的學齡前孩童能夠快速認識身邊的事物。

![截圖 2021-03-08 下午3 43 36](https://user-images.githubusercontent.com/40735651/110290418-babc9b00-8025-11eb-86ad-53613b3748c4.png)

（二）	遊戲式學習模組
遊戲式學習模組根據幼稚園課程綱要，設計遊戲式闖關關卡結合台灣地›域，將注音、英文字母、數字與益智遊戲分布在台灣的各區域，讓學齡前孩童從地域關卡中認識台灣以及學習注音、英文字母、數字的符號描寫與發音，另外也以益智遊戲培養孩童的專注力和記憶力。

![截圖 2021-03-08 下午3 45 47](https://user-images.githubusercontent.com/40735651/110290435-c14b1280-8025-11eb-89c8-3ca4f3df221a.png)

（三）	多元教材模組
多元教材模組整合文化部、教育部等政府開放資料庫，視覺化資料呈現在學習機上，為孩童提供更多樣化的學習教材，系統與家長依據孩童學習的紀錄推薦的繪本，將動物以圖像結合語音介紹，讓孩童更容易認識動物，以及利用兒童文化館的兒歌，以音樂節奏感培養孩童的聽說以及文字的發音咬字。

![截圖 2021-03-08 下午3 46 36](https://user-images.githubusercontent.com/40735651/110290465-c8722080-8025-11eb-8284-19580a073814.png)

（四）	推薦書籍模組
推薦書籍模組利用全國圖書書目與文化部開放資料，為家長推薦出與孩童學習內容相關的文化部繪本或圖書館之書籍，家長能夠將有教育意義的書籍推薦至孩童的學習機，亦或快速的從網路上借閱相關的書籍 。

![截圖 2021-03-08 下午3 47 36](https://user-images.githubusercontent.com/40735651/110290486-cf992e80-8025-11eb-8a8e-f70a708caf1f.png)

（五）	學習歷程模組
學習歷程模組透過視覺化雲端上孩童使用紀錄於家長行動APP，並結合圖表，讓家長更能輕鬆快速了解孩童的學習狀況，並設計乖寶寶值，孩童在使用學習機學習時會獲得乖寶寶數值，家長可以將其作為判斷依據來獎勵孩童。另外學習歷程模組也利用Google Map將孩童目前的位置隨時呈現於行動app，讓家長能夠即時追蹤孩童的動向。

![截圖 2021-03-08 下午3 48 10](https://user-images.githubusercontent.com/40735651/110290532-d7f16980-8025-11eb-9529-7c53d4d0dbaf.png)


## 系統
* GrowUp學習趣（孩童版）： https://github.com/kikiouo201/GrowUp
* GrowUp學習趣（家長版）： https://github.com/AppleFinn/GrowUp_app
* GrowUp學習趣（後端）： https://github.com/kikiouo201/Growup-Server
* GrowUp學習趣（後端-孩童版）： https://github.com/kikiouo201/Growup-Children
* GrowUp學習趣（後端-家長版）： https://github.com/kikiouo201/Growup-Parent
