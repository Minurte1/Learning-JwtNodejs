import bcrypt from 'bcryptjs'
import mysql from 'mysql2/promise';
import bluebird from 'bluebird';
import db from '../models/models';
import user from '../models/models/user';
// create the connection, specify bluebird as Promise

const salt = bcrypt.genSaltSync(10);
const HashPassword = (password) => {
    const HashPassword = bcrypt.hashSync(password, salt);
    const checkPass = bcrypt.compareSync(password, HashPassword);
    console.log("hash pass", HashPassword)
    console.log("check pass", checkPass)
    return HashPassword;
}
const createNewUser = async (email, password, username) => {


    let HashPasswordd = HashPassword(password)
    try {
        await db.User.create({
            username: username,
            email: email,
            password: HashPasswordd
        })

    } catch (error) {
        console.log(error)
    }

}
const getUserById = async (id) => {
    let user = [];
    user = await db.User.findOne({
        where: { id: id }

    })
    console.log('check user ', user.get({ plain: true }))
    return user.get({ plain: true })

}
const getDeleteUser = async (userID) => {
    await db.User.destroy({
        where: {
            id: userID
        }
    })
}

const getUserList = async () => {

    let newUser = await db.User.findOne({
        where: { id: 1 },
        attributes: ["id", "username", "email"],
        include: { model: db.Group, attributes: ["name", "description"], },
        raw: true,
        nest: true,
    })

    let roles = await db.Group.findAll({

        include: { model: db.Role, where: { id: 1 }, },
        raw: true,
        nest: true,
    })

    console.log("check new user ", newUser);
    console.log("check new roles ", roles);
    console.log("Oke");
    let users = []
    users = await db.User.findAll();




    return users;


    // const connection = await mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     database: 'jwt',
    //     Promise: bluebird,
    // });
    // try {
    //     const [rows, fields] = await connection.execute(`Select * from user order by id DESC`);
    //     return rows
    // } catch (error) {
    //     console.log(error)
    // }



}
module.exports = {
    createNewUser,
    getUserList,
    getDeleteUser,
    getUserById
}