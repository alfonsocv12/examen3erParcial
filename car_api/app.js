const express = require("express"),
    app = express(),
    mongoose = require('mongoose')
require('dotenv').config();

app.listen(3000, function() {
    console.log('listening on port 3000!');
});

/*set db*/
mongoose.Promise = Promise
async function run() {
    await mongoose.connect(process.env.MONGODB_URI, {
        autoReconnect: true,
        reconnectTries: 1000000,
        reconnectInterval: 3000,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
}
run().catch(error => console.error(error))

/*Plugings*/
app.use(require('cors')());
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended: true }));

app.use('/', require("./routes/landingRoutes"));
app.use('/shop', require("./routes/shopRoutes"));
app.use('/service', require("./routes/serviceRoutes"));
app.use('/appointement', require("./routes/appointmentRoutes"));
