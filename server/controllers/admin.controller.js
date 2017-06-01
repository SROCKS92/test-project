var Admin = require('../model/admin');
var User = require('../model/user');
var Question = require('../model/question');
var express = require('express')
var app = express();
var session = require('express-session');
var cookieParser = require('cookie-parser');
var router = express.Router();
var multer = require('multer');

var upload = multer({
    dest: '../uploads'
});
var user = {
    firstname: "Sarang",
    lastname: "Wadekar",
    emailid: "sarang@gmail.com",
    password: "1234",
    role:"1"
}
var admin = {
    firstname: "sarang",
    lastname: "Wadekar",
    emailid: "srocks@gmail.com",
    password: "1234",
    role:"0"
}
router.get("/create", createAdmin);
router.post("/createQ", createQuestion);
router.post("/upload/image", upload.any(), uploadImage);
router.post("/getquestion", getQuestion);


function createAdmin(req, res) {
    User.create(user, function(err, user) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(user).end(); // return all todos in JSON format
    });
};
function getQuestion(req,res) {

    Question.find(function(err, user) {
            if (err) {
                res.send(err);
            }
              res.json(user);
        });

}

function createQuestions(req, res) {

    for (var i = 0; i < req.body.length; i++) {
        Question.create({
            questionid: i,
            question: req.body[i].question,
            answer: req.body[i].answer

        }, function(err, user) {
            if (err) {
                res.send(err);
            }
            //  res.json(user);
        });
    }
    res.json({
        status: 'success'
    }).end();
};
function createQuestion(req, res) {
          console.log(req.body);
    
        Question.create({
            questionid: '',
            question: req.body.question,
            answer: req.body.answer,
            option: req.body.option,
            path:req.body.path

        }, function(err, user) {
            if (err) {
                res.send(err);
            }
              res.json(user);
        });
    };
    
function uploadImage(req, res, next) {
    res.json(req.files[0].path).end();
};

module.exports = router;