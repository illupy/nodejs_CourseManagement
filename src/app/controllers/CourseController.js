const Course = require('../models/Course');
class CourseController{
    show(req,res,next){
        Course.findOne({slug: req.params.slug})
        .then(course => res.json(course))
        .catch(next);
    }
    //GET
    create(req,res,next){
        res.render("courses/create");
    }
    //POST
    store(req,res,next){
        
        const course = new Course(req.body);
        course.save()
        .then(()=> res.redirect("/"))
        .catch()
        
    }

    edit(req,res,next){
        Course.findById(req.params.id)
        .then(course => {
            course = course.toObject();
            res.render("courses/edit",{course})})
        .catch(next);
    }
    update(req,res,next){
        Course.updateOne({_id: req.params.id},req.body)
        .then(()=>res.redirect('/me/stored/courses'))
        .catch(next);
    }
    destroy(req,res,next){
        Course.deleteOne({_id: req.params.id})
        .then(()=> res.redirect('back'))
        .catch(next);
    }
}
module.exports= new CourseController;