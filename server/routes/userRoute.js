const Router = require('express')
const router = new Router()
const UserController = require('../controllers/userController')
const {check} = require('express-validator')
const roleMiddleware = require('../middleware/rolesMiddleware')

router.post('/registration', [
    check('email', 'Некоректный email').isEmail(),
    check('password', "Пароль должен содержать не менее 6 символов").isLength({min: 6}),
    check('name', "Имя не может быть пустым").notEmpty()
], UserController.registration)
router.post('/login', [], UserController.login)
router.get('/auth', roleMiddleware(["ADMIN"]) , UserController.auth)

module.exports = router