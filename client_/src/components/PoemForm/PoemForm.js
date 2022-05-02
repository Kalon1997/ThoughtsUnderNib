import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import {createPoemAction, SaveEditedPoemAction} from '../../actions/poem'
import FileBase from 'react-file-base64';
const PoemForm = (props) => {
  const dispatch = useDispatch();
  const {editingPoem} = useSelector((state) => (state.myweb2))
  const {editing} = useSelector((state) => (state.myweb2))
  //const [editMode, setEditMode] = useState(false)
  var initialstate = {}
  if(editing===true)
  {
    initialstate = {
      title:editingPoem.title, 
      body:editingPoem.body, 
      clipart:editingPoem.clipart,
      tags:editing.tags,
    }
  }
  else{
    initialstate = {
      title:'',
      body:'',
      clipart:'',
      tags: []
    }
  }
  const [poemData, setPoemData] = useState(initialstate);
  const savePoemHandler = async (e) => {
  e.preventDefault();
  try{
    !editing && dispatch(createPoemAction(poemData.title, poemData.body, poemData.clipart, poemData.tags))
    editing && dispatch(SaveEditedPoemAction(editingPoem.id, poemData.title, poemData.body, poemData.clipart, poemData.tags))
    window.location.assign('/feed')
  } catch(er){
   console.log(er);
  }
}

    return (
      
      <form className="mt-5 pt-5 mx-auto bg-light w-50 px-3 py-3">
      <h3 className=" mx-auto bg-light text-primary">Add a new poetry!</h3>

        <div class="form-group py-3">
        <label for="title">Title</label>
        <input 
            value={poemData.title}
            onChange={(e) => setPoemData({...poemData, title: e.target.value})}
            type="text" 
            class="form-control" 
            placeholder="Title" />
        </div>

        <div class="form-group py-3">
          <label for="body">Body</label>
          <textarea 
            value={poemData.body}
            onChange={(e) => setPoemData({...poemData, body: e.target.value})}
            type="text" className="form-control" rows='5' placeholder="compose your poetry here..." />
          <small id="emailHelp" class="form-text text-muted">Rhythemic poetry sounds delightful</small>
        </div>

        <div class="form-group py-3">
          <label for="tags">Tags</label>
          <textarea 
          value={poemData.tags}
          onChange={(e) => setPoemData({...poemData, tags: e.target.value})}
          type="text" className="form-control" placeholder="tags" />
          <small id="emailHelp" class="form-text text-muted">Enter related tags separated by comma</small>
        </div>

        <div class="form-group py-3">
        <label for="image">Image</label>
        {editing===true ? (<img src={editingPoem.clipart} width={"300px"} height={"250px"} alt="img"/>) : (

        <img src={poemData.clipart} width={"300px"} height={"250px"} alt="img"/>)}
        <FileBase base64={poemData.clipart} type="file" multiple={false} onDone={({ base64 }) => setPoemData({ ...poemData, clipart: base64 })} />
        </div>
        


  <button onClick={savePoemHandler} type="submit" class="btn btn-dark mx-auto px-5 align-content-center">Save</button>


</form> 
    )
}

export default PoemForm;
