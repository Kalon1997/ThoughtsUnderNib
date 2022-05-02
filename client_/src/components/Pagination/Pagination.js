import React from 'react'
import { getAllPoemsAction } from '../../actions/poem';
import { useDispatch, useSelector } from 'react-redux';
const Pagination = (props) => {
    const dispatch=useDispatch()
    const {totalPages} = useSelector((state)=>(state.myweb2))
    var arrayPage = [];
    for(var i=0; i<totalPages; i++)
    {
        arrayPage.push(i+1)
    }

    return (
        <nav className='mt-3 pt-3 fixed' aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                {
                  arrayPage.map((i)=>(
                    <li className="page-item">
                    <button className="page-link" onClick={(e=>{
                        dispatch(getAllPoemsAction(i-1))
                    })}>{i}</button>
                    </li> 
                  ))
                }
            </ul>
        </nav>
    
    )
}
export default Pagination;
