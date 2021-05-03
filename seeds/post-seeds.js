const { Post } = require('../models');

const postData = [
    {
        title: 'Title 1',
        post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        user_id: '1'
    },
    {
        title: 'Title 2',
        post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        user_id: '2'
    },
    {
        title: 'Title 3',
        post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        user_id: '3'
    },
    {
        title: 'Title 4',
        post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        user_id: '4'
    },
    {
        title: 'Title 5',
        post_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        user_id: '5'
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;