# LatestBTCPrice-NodeJS-Project
 NodeJS - Project 1 - API Call

I have Enhanced the application and made it more generic. 
Please fine below my notes and project and enhacments I added.

Requirements Completed:
1. The webservice displays current USD price of Bitcoin.
2. The Node.js application performs an asynchronous action and responds.
3. The Node.js server application listens on port 3000 and accepts a GET request.
4. The GET request is made to the "https://blockchain.info/ticker" URI using Axios module.
5. The last USD value of the Bitcoin is displayed on the browser.
6. Implemented winston logging

Enhancements added:
1. I have used two different ways of making HTTP calls. We can use either one to view the data.
  If using HTTP Module of Node.js, run the command as - node index.js (or) nodemon index.js
  If using Express Framework, run the command as - node indexExpress.js (or) nodemon indexExpress.js
2. Used Nodemon library - which monitors the changes and restarts the node. 
    run as - nodemon index.js (instead of node index.js)
3. We can use any port we want(not just 3000) by running the below command
    set port=1000;
