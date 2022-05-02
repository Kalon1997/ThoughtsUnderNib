import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {EditingPoemAction, DeletePoemAction, likeDislikePoemAction, addCommentAction} from '../../actions/poem'
import {useHistory} from 'react-router-dom'
import moment from 'moment';
import Comment from './Comment.js'
import {AiFillLike, AiOutlineLike, AiOutlineEdit, AiFillEdit, AiOutlineDelete, AiFillDelete} from 'react-icons/ai'
import {FaComments, FaRegComments} from 'react-icons/fa'
const EachPoem = (i) => {
  
    var vis;
    const _id = useSelector(state => {
        if(state.myweb.user) {
            return state.myweb.user._id
        }
        return "null";
     })
    
    if(i.createdById === _id.toString())
    {vis=true;}
    else{vis=false}
    const [commentValue, setCommentValue] = useState("");
    const [commentSection, setCommentSection] = useState(false)
    const [visibility, setVisibility] = useState(vis)
    const history = useHistory()
    const dispatch = useDispatch()
    const [showMore, setShowMore] = useState(false);
    const [iconEdit, setIconEdit] = useState(true);  //icon is outline
    const [iconDelete, setIconDelete] = useState(true);

    const [ liked, setLiked] = useState(i.likes.includes(_id.toString()))
    const [ likeCount, setLikeCount] = useState(i.likes.length)
    const [commentList, setCommentList] = useState(i.comments)
  

    return (
        <div className="col" >

        <div className="card text-center">
            <div className="card-block">  
            <img style={{width: '200px', height: '200px', margin: 'auto'}} class="mt-3 card-img-top" src={i.clipart} alt="Card image cap" />
                    <h4 class="card-title">{(i.title)} - <span type='button' className='text-info'>{(i.createdByUsername)}</span></h4>
                    {(i.tags.map((j)=>(<b>#{j} </b>)))}
                    <p>{moment(i.createdAt).fromNow()}</p>
                    { !showMore && <pre class="card-text">{(i.body).slice(0,100)}... <a className='text-info' type='button' onClick={e => {setShowMore(true)}}>Show More</a> </pre>}
                    {showMore && <pre class="card-text">{(i.body)} <a className='text-info' type='button' onClick={e => {setShowMore(false)}}>Hide again!</a></pre> }
                    <div>

<h2>
{likeCount}
{   liked === true ? 
    (
        <AiFillLike className="btn" size={"80px"} 
            onClick={(e)=>{
            setLiked(false)
            setLikeCount(prev=>prev-1)
            dispatch(likeDislikePoemAction(i.id))
        }}
        />
    )
    :
    (
        <AiOutlineLike className="btn" size={"80px"} 
            onClick={(e)=>{
            setLiked(true)
            setLikeCount(prev=>prev+1)
            dispatch(likeDislikePoemAction(i.id))
        }} />
    )
}

{
    commentSection === true ? 
    (<FaComments className="btn" size={"80px"} onClick={(e) => {
        setCommentSection(false)
    }}/>)
    :
    (<FaRegComments className="btn" size={"80px"} onClick={(e) => {
        setCommentSection(true)
    }}/>)
}


{ visibility &&
(iconEdit===true ? <AiOutlineEdit className="btn" size={"80px"}
onClick={(e)=>{
    setIconEdit(false)
    setTimeout(() => {
        dispatch(EditingPoemAction(i.id, i.title, i.body, i.clipart))
        history.push('/poemform');
    }, 500);
    }}
/> : <AiFillEdit className="btn" size={"80px"} />)
}





{ visibility && (iconDelete===true ? <AiOutlineDelete className="btn" size={"80px"}
onClick={(e) => {
    setIconDelete(false)
    setTimeout(() => {
        dispatch(DeletePoemAction(i.id))
        window.location.reload()
    }, 500);
}}
/> : <AiFillDelete className="btn" size={"80px"} />)}


</h2>



                    </div>
                    
{ commentSection && <div>
    <span><input 
                value={commentValue}
                onChange={(e)=>{setCommentValue(e.target.value)}}
                type="text" size="40"/>
            <button className="btn mx-3 btn-dark" onClick={(e)=>{
                setCommentList([...commentList, commentValue])
                dispatch(addCommentAction(i.id, commentValue))
                setCommentValue("")
    }}>Add</button>
    </span>
    
    { commentList && commentList?.map((j) => {
        return (
            <Comment 
                key={j+"_"}
                poemId={i._id}
                mainThing={j}
            />    
        )
    })}
    </div>}


            </div>
        </div>
</div>
    )
}
export default EachPoem;

