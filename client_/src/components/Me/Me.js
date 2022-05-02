import React, { useEffect} from 'react'
import EachPoem from '../Feed/EachPoem'
import { useDispatch, useSelector } from 'react-redux';
import { getMyPoemsAction } from '../../actions/poem';
const Me = () => {
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(getMyPoemsAction());
    }, []);

    const allPoemsArray = useSelector((state) => (state.myweb2.myPoems))
    return (
        <div class="mt-5 pt-5 mx-3 row row-cols-1 row-cols-md-3 g-4">
            
        {
            allPoemsArray && allPoemsArray?.map((i, key) => {
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
    
    )
}
export default Me;
