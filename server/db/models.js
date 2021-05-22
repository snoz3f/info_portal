const sequelize = require('./db')
const {DataTypes} = require('sequelize')

const User = sequelize.define(
    'user',
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: DataTypes.STRING, required: true},
        email: {type: DataTypes.STRING, required: true, unique: true},
        password: {type: DataTypes.STRING, required: true}
    }
)

const Role = sequelize.define(
    'role',
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        value: {type: DataTypes.STRING, unique: true}
    }
)

const UserRoles = sequelize.define(
    'user_roles',
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, createdAt: false, updatedAt: false}
    }
)

User.belongsToMany(Role, {through: UserRoles})
Role.belongsToMany(User, {through: UserRoles})

module.exports = {
    User,
    Role,
    UserRoles
}