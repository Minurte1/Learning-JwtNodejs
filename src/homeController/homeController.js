import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt',
});

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
    connection.query(`INSERT INTO users (email,password,username) VALUES (?,?,?)`, [email, password, username],
        function (err, results, fields) {
            console.log(results)
        })

    return res.send('asgdy')
}
module.exports = {
    handleHellwork, handleUserPage, handleCreateNewUser
}
