import { complete } from "./actions";
import { addtask, completetask, deletetask, edittask } from "./actionstypes";

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
        case deletetask:
            return {
                ...state , tasks : state.tasks.filter(el=>el.id!==payload)
            }
            case completetask:
                return {
                    ...state , tasks : state.tasks.map(el=> el.id=== payload ? {...el , isDone : !el.isDone} : el )
                }
                case addtask:
                return {
                    ...state , tasks : [...state.tasks, newtodo] 
                }

                case edittask:
                    return {
                        ...state , tasks : state.tasks.map(el=>el.id === payload.id ? payload : el) 
                    }

        default:
          return state 
    }
}


export default Reducer