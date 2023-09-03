import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { taskEdit } from './redux/actions';
import { Button, Modal } from 'react-bootstrap';
import { taskEdit } from '../redux/action';

const EditTask = ({task}) => {

    const [show, setShow] = useState(false);
const [etext, setEtext] = useState(task.action)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const handleEdit =(e) =>  {e.preventDefault(); 
    const editeTask = { id: task.id, action: etext , isDone: task.isDone } ;
    dispatch(taskEdit(editeTask)) ;
    handleClose();
    }
  return (
    <div>
         <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit The Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={handleEdit}> 
                <input type ="text" value={etext} onChange={(e)=>setEtext(e.target.value)} /> <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type ="submit">
            Save Changes
          </Button>     </form>
            </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditTask