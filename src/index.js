const express= require('express')
const morgan=require('morgan')
const app=express()
const methodOverride = require('method-override')
const path = require('path')
const port= 3000

const handlebars= require('express-handlebars')
const exp = require('constants')
const route = require('./routes')
const db = require('./config/db')
db.connect();

app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({
    extended:true
}))
app.use(morgan('combined'))
app.engine('hbs',handlebars.engine({extname:'.hbs'}))
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'resources','views'))
route(app);
app.listen(port, ()=> console.log(`App listening at port: http://localhost:${port}`))
