import {user} from '../Types/userTypes'

let users:user[]= [
    {
        id:1,
        name:"adsd",
        PhoneNo:"112321",
        Age:20
    },
    {
        id:2,
        name:"dvvvd",
        PhoneNo:"10101010",
        Age:201
    }
];

const AddUser= (u:user)=>{
    users.push(u);
}

const getAllusers=()=>{
    return users;
}

const getUser= async (id:number)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(userexist(id)){
                for(let i=0;i<users.length;i++){
                    if(users[i].id===id){
                        resolve(users[i]);
                    }
                }
            }
            else{
                reject(new Error("user doesn't exist"));    
            }
        }, 2000);
    })
}

const userexist=(id:number)=>{
    for(let i=0;i<users.length;i++){
        if(users[i].id==id){
            return 1;
        }
    }
    return 0;
}

export {getAllusers, getUser, AddUser, userexist};