import bcrypt from 'bcryptjs'
import mysql from 'mysql2/promise';
import bluebird from 'bluebird';
import db from '../models/models';
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
const getUserList = async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird,
    });

    try {
        const [rows, fields] = await connection.execute(`Select * from user order by id DESC`);


        return rows
    } catch (error) {
        console.log(error)
    }



}
module.exports = {
    createNewUser,
    getUserList
}