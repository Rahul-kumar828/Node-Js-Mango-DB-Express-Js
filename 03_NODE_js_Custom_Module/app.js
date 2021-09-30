//load custom module
const util=require('./admin/util');
const profile=require('./data/profile');

//util.js
util.greet('john');

//profile.js
let users=[
    {
    name:'rahul',
        age:21,
        occupation:'software developer'
    },
    {
        name:'ankit',
        age:21,
        occupation: 'software developer'
    }
];
profile.printUsers(users);
