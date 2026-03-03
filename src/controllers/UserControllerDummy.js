// API creation
const getUser = (req,res) => {
    console.log("getUser called...")
    res.send("user api called...")
}

const getUserData = (req,res) =>{
    const userObj = {
        id:101,
        name:"amit",
        age:23
    }
    res.json({
        message:"get user data",
        data:userObj
    })
}

const users =[
 {id:101,name:"kd",age:23},
 {id:102,name:"ke",age:24},
 {id:103,name:"kg",age:26}
] 

const allUsers = (req,res) =>{
    res.json({
        message:"all users is printed..",
        data:users
    })
}

const getUserById = (req,res) =>{
    console.log(req.params.id);
    const foundUser = users.find((user)=>user.id == req.params.id)
    if(foundUser){
        res.json({
            message:"user found..",
            data:foundUser
        });
    }else{
        res.json({
            message:"user not found..",
        });
    }
}

module.exports = {
    getUser,getUserData,allUsers,getUserById
}