import React from 'react';
import { useDispatch } from 'react-redux';
// import { Delete, complete } from './redux/actions';
import EditTask from './EditTask';
import { Delete, complete } from '../redux/action';

const Task = ({ el }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(Delete(el.id)); 
  };
  const handleComplete = () => {
    dispatch(complete(el.id)) ;
  } ; 

  return (
    <div>
      <h4 className = {el.isDone ? "undo" : "complete"}> {el.action} </h4>
      <button  onClick={handleComplete}> {el.isDone ? "undo" : "complete"} </button>
      <button onClick={handleDelete}> delete </button>
      <EditTask task={el}/>
    </div>
  );
};

export default Task;
