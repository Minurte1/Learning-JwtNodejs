import {registerNewUser} from '../service/loginRegisterService'
const testApi = (req, res) => {
    return res.status(200).json({
        message: "oke",
        data: "test api"
    });
}
const handleRegister = async (req,res) =>{
    try{
       if(!req.body.email || !req.body.password || !req.body.username || !req.body.phone){
        return res.status(200).json({
            EM:'Missing required parameters',
            EC:'1',
            DT:''
        })
       }
       if(req.body.password && req.body.password.length <3){
        return res.status(200).json({
            EM:'Your password mus have more than 3 letters',
            EC:'1',
            DT:''
        })
       }
       //service create user
let data = await registerNewUser(req.body)
       return res.status(200).json({
        EM:data.EM,  //error message
        EC:data.EC, //error code
        DT:'',      //date
    
    })
    }
    catch(e){
    return res.status(500).json({
    EM:'error', //error message
    EC:'-1', //error code
    DT:'',      //date

})
    }


  
}
export { testApi ,handleRegister};
