import bcrypt from 'bcryptjs'
import mysql from 'mysql2';


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt',
});

const salt = bcrypt.genSaltSync(10);

const HashPassword = (password) => {
    const HashPassword = bcrypt.hashSync(password, salt);
    const checkPass = bcrypt.compareSync(password, HashPassword);
    console.log("hash pass", HashPassword)
    console.log("check pass", checkPass)
    return HashPassword;
}
const createNewUser = (email, password, username) => {
    let HashPasswordd = HashPassword(password)

    connection.query(`INSERT INTO users (email,password,username) VALUES (?,?,?)`, [email, HashPasswordd, username],
        function (err, results, fields) {
            console.log(results)
        })

}
const getUserList = () => {
    let user = []
    connection.query(`Select * from users`,
        function (err, results, fields) {
            console.log(results)
        })

}
module.exports = {
    createNewUser,
    getUserList
}