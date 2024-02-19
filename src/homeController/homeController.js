import userService from '../service/userService'
const handleHellwork = (req, res) => {
    return res.render('home.ejs')
}

const handleUserPage = (req, res) => {
    return res.render('users.ejs')
}
const handleCreateNewUser = (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email
    userService.createNewUser(email, password, username)
    userService.getUserList()
    return res.send('asgdy')
}
module.exports = {
    handleHellwork, handleUserPage, handleCreateNewUser
}
