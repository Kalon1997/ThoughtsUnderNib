import React, { useEffect} from 'react'
import EachPoem from './EachPoem.js'
import { useDispatch, useSelector } from 'react-redux';
import { getAllPoemsAction } from '../../actions/poem';
import Pagination from '../Pagination/Pagination'
const Feed = () => {
    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(getAllPoemsAction());
    }, []);

    const allPoemsArray = useSelector((state) => (state.myweb2.allPoems))
    return (
        <div className="">
         
        
        <div className="mt-5 pt-5 mx-3 row row-cols-1 row-cols-md-3 g-4">
            
            {
                allPoemsArray && allPoemsArray?.map((i) => {
                  
                    return(
                        <EachPoem 
                            key={i._id+"_"}
                            id={i._id}
                            title={i.title}
                            body={i.body}
                            clipart={i.clipart}
                            tags={i.tags}
                            createdById={i.createdById}
                            createdByUsername={i.createdByUsername}
                            createdAt={i.createdAt}
                            likes={i.likes}
                            comments={i.comments}
                        />
                    )
                })
            }
    
    
            
        </div>

        <center className='mx-auto'><Pagination/></center>
    </div>
  
        
    
    )
}
export default Feed;
