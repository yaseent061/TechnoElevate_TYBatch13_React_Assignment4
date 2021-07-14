import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

 export default function Modal1(props) {
    
    let [name,setName] = useState('')
    let [artist,setArtist] = useState('')

  const changeName=(e)=>{
    setName(e.target.value)
  }
  const changeArtist=(e)=>{
    setArtist(e.target.value)
  }

    return (
      <>
        <Modal
          show={props.show}
          onHide={props.handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Song</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={name} onChange={(e)=>changeName(e)}/>
</div>
          <div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default">Artist</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={artist} onChange={(e)=>changeArtist(e)}/>
</div>
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{
              props.add(name,artist)
              props.handleClose()
              }}>Add</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  