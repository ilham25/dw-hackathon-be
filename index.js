require('dotenv').config();
const sequelize =require('./configs/DB_Connection');
const models = require('./models');
const router = require('./src/router');
const express = require('express')
const cors = require('cors');
const app = express();
const { createServer } = require("http");
const httpServer = createServer(app);
const bodyParser = require('body-parser');
const port = 5000

/**
 *    +++++++++++++++   body parser    +++++++++++++++
 */ 
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));


app.use("/public", express.static(__dirname + "/public"));
httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
 
 
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


/**
 *    +++++++++++++++   db connection     +++++++++++++++
 */ 

 const initApp = async () => {
    console.log("Testing the database connection..");
     try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
         /**
         * Syncronize the Post model.
         */
        await sequelize.sync();
        // await PurchasesBook.sync({force:true});
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  };
  /**
  * Initialize the application.
  */
  initApp();



app.get('/', (req, res) =>{res.send('Hello this api dumbmerch v.1.00 !')});
app.use('/api/v1/',router);