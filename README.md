# LatestBTCPrice-NodeJS-Project
 NodeJS - Project 1 - API Call

I have Enhanced the application to display the value of BTC in any desired currency (not just USD).

Please find below my comments:
Requirements Completed:
1. The webservice displays current USD price of Bitcoin.
2. The Node.js application makes an asynchronous call.
3. The Node.js server application listens on port 3000.
4. The GET request is made to the "https://blockchain.info/ticker" URI using Axios module.
5. The last USD value of the Bitcoin is displayed on the browser along with timestamp.
6. Implemented winston logging.

Enhancements added:
1. I have used two different ways of making HTTP calls(HTTPModule and ExpressFramework). We can use either one of the below options to view the data.
  To test the code built using HTTP Module of Node.js, run the command as - node index.js (or) nodemon index.js
  To test the code built using Express Framework, run the command as - node indexExpress.js (or) nodemon indexExpress.js
2. Used Nodemon library - which monitors the changes and restarts the node automatically when changes are made to code.
    run as - nodemon index.js (instead of node index.js)
3. We can use any port we want(not just 3000) by running the below command
    set port=1000(provide any port number you desire);

How to run the application? - 
1. Download the code.
2. Open it in VS code.
3. npm install
4. Run the below command:
node index.js or nodemon index.js 
node indexExpress.js or nodemon indexExpress.js

Note:
1. To use Nodemon: Install nodemon globally as below:
npm i g nodemon
