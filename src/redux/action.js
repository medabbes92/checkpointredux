// import { addtask, completetask, deletetask, edittask, filtertask } from "./actionstypes"

import { ADDTASK, COMPLETETASK, DELETETASK, EDITTASK, FILTERTASK} from "./actionType"

export const Delete =(id)=> {
return {
    type: DELETETASK,
    payload : id }
}

export const complete=(id) => {
    return {
        type : COMPLETETASK ,
        payload : id
    }
}

export const add=(newtodo) => {
    return {
        type : ADDTASK ,
        payload : newtodo
    }
}

export const taskEdit=(editeTask) => {
    return {
        type : EDITTASK,
        payload : editeTask
    }
}
export const filter =(isDone)=> {
    return {
        type: FILTERTASK,
        payload : isDone }
    }