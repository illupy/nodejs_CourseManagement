const siteRouter=require('./site')
const newsRouter= require('./news')
const courseRouter= require('./courses')
const meRouter= require('./me')
function route(app){
    app.use("/news",newsRouter);
    app.use("/",siteRouter);
    app.use("/courses",courseRouter);
    app.use("/me",meRouter);
}
module.exports=route;