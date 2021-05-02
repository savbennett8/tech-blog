const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

//homepage hosts any existing posts as well as links for:
//signin
//dashboard
//homepage

//homepage route
router.get('/', (req, res) => {
    console.log(req.session);
    Post.findAll({
        attributes: [
            'id',
            'title',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            //pass a single post object into the homepage template
            res.render('homepage', {
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//login route
router.get('/login', (req, res) => {
    //if user is logged in, redirect to homepage instead when 'login' is clicked
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

//dashboard route


module.exports = router;