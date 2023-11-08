import {task} from '../Types/taskTypes'
import { userexist } from './userService';
let tasks:task[]=[
    {
        id:1,
        title:"first",
        description:"hard",
        UserId:1
    }
];

const addTask=async(task:task)=>{
    return new Promise((reslove, reject)=>{
        setTimeout(() => {
            const id=+task.UserId;
            if(userexist(id)){
                tasks.push(task);
                reslove("task added successfully")
            }
            else{
                reject(new Error("user doesn't exist"))
            }
        }, 2000);
    })
}

const getUserTask=async(UserId:number)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(async() => {
            if(userexist(UserId)){
                let usertasks:task[]=[];
                for(let i=0;i<tasks.length;i++){
                    if(tasks[i].UserId==UserId){
                        usertasks.push(tasks[i]);
                    }
                }
                resolve(usertasks);
            }
            else{
                reject(new Error("user doesn't exist"));
            }
        }, 2000);
    })
}

const getAllTasks=()=>{
    return tasks;
}

export{addTask, getAllTasks, getUserTask};