import React, { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SearchPoemsByTagsAction } from '../../actions/poem'
import EachPoem from '../Feed/EachPoem'
const Search = () => {
const [word,setSearchWord] = useState()
const dispatch = useDispatch()
const tagSearchedPoems = useSelector((state) => (state.myweb2.searchedByTagPoems))
    return (
        <div className="mt-5 pt-5">
            <form className='form-group mt-5 pt-5 mx-5 mx-auto bg-light w-100 px-3 py-3'>
            <input className='w-100'
                type="text"
                value={word}
                placeholder='search by tags...(separated by commas)'
                onChange={(e)=>{setSearchWord(e.target.value)}}
            />
            <button className="mt-2 mx-auto btn btn-dark" onClick={(e)=>{
                e.preventDefault();
               dispatch(SearchPoemsByTagsAction(word))
            }}>Search</button>
        </form>
{
    tagSearchedPoems && tagSearchedPoems?.map((i) => {
        return(
            <EachPoem 
                key={i._id}
                id={i._id}
                title={i.title}
                body={i.body}
                clipart={i.clipart}
                tags={i.tags}
                createdById={i.createdById}
                createdByUsername={i.createdByUsername}
                createdAt={i.createdAt}
                likes={i.likes}
            />
        )
    })
}


        </div>
        
    )
}
export default Search;
