const {User, Role} = require("../db/models");
const bcryptjs = require('bcryptjs')
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')

const generateToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: "24h"})
}

class UserController{
    async registration(req,res){
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({message: "registration error", errors})
        }
        const {email, password, name} = req.body
        const candidate = await User.findOne({where: {email}})
        const userRole = await Role.findOne({where: {value: "USER"}})

        if(candidate){
           return  res.status(400).json({message: "bad request"})
        }
        const hashPassword = await bcryptjs.hash(password, 7)
        const user = await User.create({name, email, password: hashPassword})

        user.addRole(userRole.id)
        user.roles = [userRole.value]
        const token = generateToken(user.id, user.roles)

        res.json(token)
    }
    async login(req, res){
        const {email, password} = req.body
        const user = await User.findOne({where: {email}, include: Role})

        if(!user){
            return res.status(400).json({message: "user with this email is not exist"})
        }
        const validPassword = await bcryptjs.compareSync(password, user.password)
        if(!validPassword){
            return res.status(400).json({message: "invalid password"})
        }
        const token = generateToken(user.id, user.roles)
        res.json(
            {
                token,
                user:{
                    id: user.id,
                    email: user.email,

                }
            }
        )
    }
    async auth(req, res){
        const users = await User.findAll({include: {all: true}})
        res.json(users)
    }
}

module.exports = new UserController()