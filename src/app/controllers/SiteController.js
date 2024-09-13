const Course = require('../models/Course');
class SiteController{
    index(req,res,next){
        Course.find({})
            .then(courses=> {
                courses = courses.map(courses => courses.toObject());
                res.render('home',{courses});
            }).catch(next);
    }
}
module.exports= new SiteController;