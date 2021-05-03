const { User } = require('../models');

const userData = [
    {
        username: 'freddycodes22',
        email: 'freddy@email.com',
        password: 'freddycodes22!'
    },
    {
        username: 'sassysam7',
        email: 'sammy@email.com',
        password: 'sassysam7!!'
    },
    {
        username: 'lauren456',
        email: 'lauren456@email.com',
        password: 'lauren456!!'
    },
    {
        username: 'richyrich1',
        email: 'richard1@email.com',
        password: 'richyrich1!!'
    },
    {
        username: 'libbycar7',
        email: 'libbycar7@email.com',
        password: 'libbycar7!!'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;