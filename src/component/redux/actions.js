import { addtask, completetask, deletetask, edittask } from "./actionstypes"

export const Delete =(id)=> {
return {
    type: deletetask,
    payload : id }
}

export const complete=(id) => {
    return {
        type : completetask ,
        payload : id
    }
}

export const add=(newtodo) => {
    return {
        type : addtask ,
        payload : newtodo
    }
}

export const taskEdit=(editeTask) => {
    return {
        type : edittask,
        payload : editeTask
    }
}