const Sequelize = require('sequelize');
const db = require('../../connection');

const SampleUserModel = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    profile_img: {
        type: Sequelize.STRING
    }
},{
    tableName: 'users'
})

module.exports = SampleUserModel;