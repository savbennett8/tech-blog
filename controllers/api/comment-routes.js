const router = require('express').Router();
const { Comment } = require('../../models');

// get all comments
router.get('/', (req, res) => {
    Comment.findAll({})
        .then(dbCommentData => {
            res.json(dbCommentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// allow to create post if user is logged in
router.post('/', (req, res) => {
    //check the session
    if (req.session) {
        Comment.create({
            comment_body: req.body.comment_body,
            //use the id from the session
            user_id: req.session.user_id,
            post_id: req.body.post_id
        })
            .then(dbCommentData => res.json(dbCommentData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
});

//delete comment
router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbCommentData => {
            if (!dbCommentData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbCommentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;