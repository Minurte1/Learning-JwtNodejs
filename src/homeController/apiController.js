const testApi = (req, res) => {
    return res.status(200).json({
        message: "oke",
        data: "test api"
    });
}
const handleRegister = (req,res) =>{
console.log('helloworkd =>>',req.body)

    return
}
export { testApi ,handleRegister};
