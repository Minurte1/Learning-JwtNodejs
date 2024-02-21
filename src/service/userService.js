import bcrypt from 'bcryptjs'
import mysql from 'mysql2/promise';
import bluebird from 'bluebird';
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
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird,
    });

    let HashPasswordd = HashPassword(password)
    try {
        await connection.execute(`INSERT INTO users (email,password,username) VALUES (?,?,?)`, [email, HashPasswordd, username]);
        console.log('Thêm dữ liệu thành công')
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
        const [rows, fields] = await connection.execute(`Select * from users order by id DESC`);


        return rows
    } catch (error) {
        console.log(error)
    }



}
module.exports = {
    createNewUser,
    getUserList
}