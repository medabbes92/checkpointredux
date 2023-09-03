
// import { addtask, completetask, deletetask, edittask, filtertask } from "./actionstypes";

import { ADDTASK, COMPLETETASK, DELETETASK, EDITTASK, FILTERTASK} from "./actionType";

const todos = {
  tasks: [
    { id: Math.random(), action: "learn Html ", isDone: true },
    { id: Math.random(), action: "learn css ", isDone: true },
    { id: Math.random(), action: "learn js ", isDone: true },
  ],

};

const Reducer  =(state = todos , {type ,payload}) => {

    const newtodo = {id: Math.random(), action: payload, isDone: false}
   
    switch (type) {
        case DELETETASK:
            return {
                ...state , tasks : state.tasks.filter(el=>el.id!==payload)
            }
            case COMPLETETASK:
                return {
                    ...state , tasks : state.tasks.map(el=> el.id=== payload ? {...el , isDone : !el.isDone} : el )
                }
                case ADDTASK:
                return {
                    ...state , tasks : [...state.tasks, newtodo] 
                }

                case EDITTASK:
                    return {
                        ...state , tasks : state.tasks.map(el=>el.id === payload.id ? payload : el) 
                    }

                    case FILTERTASK:
                        return {
                            ...state , filter : !state.filter
                        }

        default:
          return state 
    }
}


export default Reducer