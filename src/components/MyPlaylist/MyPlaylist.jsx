import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Modal1 from '../Modal/Modal1';

export default function MyPlaylist() {
    const [playList, setPlayList] = useState(null) 
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    let post = async (name,artist)=>{
   await axios.post(
        "https://axios1-3ed16-default-rtdb.firebaseio.com/music.json",
        {
            name:name,
            singer : artist
        }
      ).then((resp)=>{
          console.log(resp);
      });
      
      setPlayList([...playList,
        {name:name,singer:artist}])
      
    }
   
    const handleDelete = (song) => {
      axios
        .delete(
          `https://axios1-3ed16-default-rtdb.firebaseio.com/music/${song.key}.json`
        )
        .then((resp) => {
          console.log("deleted");
  
          const updatedPlaylist = playList.filter((el) => {
            return el.key !== song.key ? el : null;
          });
  
          setPlayList(updatedPlaylist)
        })
        .catch((err) => {
          console.log(err);
        });
    
  }
    
    useEffect(() => {
        let arr =[]
        axios.get(
            "https://axios1-3ed16-default-rtdb.firebaseio.com/music.json",   
          ).then(data => {
              for(let i in data.data){
                arr.push({
                    key : i,
                    ...data.data[i]
                })
              }
              setPlayList(arr)
            
          })
        
    }, [])
  
      let value =null
    if(playList === null ){ value = (<h1>Enter a song</h1>)}
    else{ value = (
         <table className="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Name</th>
      <th scope="col">Artist</th>
    </tr>
  </thead>
  <tbody>
      {playList.map((el,i)=>{
          return (<tr key={i}>
                  <td>{i+1}</td>
                  <td>{el.name}</td>
                  <td>{el.singer}</td>
                  <td><button className="btn btn-danger" onClick={()=>{handleDelete(el)}}>Delete</button></td>
          </tr>)
      })}
       </tbody>
</table>
    )}

    return (
        <div>
        {value}
        <button className="btn btn-success mt-3 ml-1" onClick={handleShow}>Add song</button>
        <Modal1 show={show} handleShow={handleShow} handleClose={handleClose} add={post}/>
        </div>
        )

        
    
}
