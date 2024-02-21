import userService from '../service/userService'
import mysql from 'mysql2/promise';
import bluebird from 'bluebird';
const handleHellwork = (req, res) => {

    return res.render('home.ejs')
}
const handleDeleteUser = async (req, res) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird,
    });
    const id = req.params.id
    console.log('check id', id)
    // let userList = await userService.getUserList()
    try {
        await connection.execute(`delete From usErs Where id = ?`, [id]);
        console.log('thanh cong')
        return res.redirect('/user')
    } catch (error) {
        console.log(error)
        return res.redirect('/user')
    }

}
const handleUserPage = async (req, res) => {
    let userList = await userService.getUserList()
    return res.render('users.ejs', { userList })
}
const handleCreateNewUser = (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    userService.createNewUser(email, password, username)
    return res.redirect('/user')

}
module.exports = {
    handleHellwork, handleUserPage, handleCreateNewUser, handleDeleteUser,
}
