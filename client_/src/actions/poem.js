import axios from "axios";
export const getAllPoemsAction = (pageNum) => async (dispatch) => {
    try {
        //request
        dispatch({
            type: "GetAllPoemsRequest"
        })
        //success
        // {withCredentials: true}
        axios.defaults.withCredentials = true
        const { data } = await axios.get(
            `/api/v1/getPoems?page=${pageNum}`,
            {
              headers: {
                "Content-Type": "application/json",
              }
            }
          );
          dispatch({
            type:"GetAllPoemsSuccess",
            payload: data.poems,
            totalPages: data.totalPages,
          })
    } catch (error) {
      dispatch({
        type: "GetAllPoemsFailure",
        payload: error
        //payload: error.response.data.message
      })
    }
}


export const getMyPoemsAction = () => async (dispatch) => {
  try {
      //request
      dispatch({
          type: "GetMyPoemsRequest"
      })
      //success
      // {withCredentials: true}
      axios.defaults.withCredentials = true
      const { data } = await axios.get(
          "/api/v1/me",
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
        dispatch({
          type:"GetMyPoemsSuccess",
          payload: data.mypoemlist
        })
  } catch (error) {
    dispatch({
      type: "GetMyPoemsFailure",
      payload: error.response.data.message
    })
  }
}


export const createPoemAction = (title, body, clipart, tags) => async (dispatch) => {
  try {
      //request
      dispatch({
          type: "CreatePoemRequest"
      })
      //success
      // {withCredentials: true}
      axios.defaults.withCredentials = true
      const { data } = await axios.post(
          "/api/v1/createPoem",
          {
            title, body, clipart, tags
          },
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
        dispatch({
          type:"CreatePoemSuccess",
          payload: data.poemforyou
        })
  } catch (error) {
    dispatch({
      type: "CreatePoemFailure",
      payload: error.response.data.message
    })
  }
}



export const EditingPoemAction = (id, title, body, clipart, tags) => (dispatch) => {
  try {
      //request
      dispatch({
          type: "EditModeOnRequest"
      })
      
        dispatch({
          type:"EditModeOnSuccess",
          payload: {id, title, body, clipart, tags}
        })
  } catch (error) {
    dispatch({
      type: "EditModeOnFailure",
      payload: error.response.data.message
    })
  }
}

export const SaveEditedPoemAction = (id, title, body, clipart, tags) => async (dispatch) => {
  try {
      //request
      dispatch({
          type: "EditSaveRequest"
      })
       //success
      // {withCredentials: true}
      axios.defaults.withCredentials = true
      const { data } = await axios.put(
          `/api/v1/editPoem/${id}`,
          {
            title, body, clipart, tags
          },
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
        dispatch({
          type:"EditSaveSuccess",
          payload: data.poemToBeEdited,
        })
  } catch (error) {
    dispatch({
      type: "EditSaveFailure",
      payload: error.response.data.message
    })
  }
}


export const DeletePoemAction = (id) => async (dispatch) => {
  try {  //
      //request
      dispatch({
          type: "DeletePoemRequest"
      })
       //success
      // {withCredentials: true}
      axios.defaults.withCredentials = true
      const { data } = await axios.delete(
          `/api/v1/deletePoem/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
        dispatch({
          type:"DeletePoemSuccess",
          payload: data.poemToBeDeleted,
        })
  } catch (error) {
    dispatch({
      type: "DeletePoemFailure",
      payload: error.response.data.message
    })
  }
}

export const SearchPoemsByTagsAction = (word) => async (dispatch) => {
  try {  
      //request
      dispatch({
          type: "SearchPoemRequest"
      })
       //success
      // {withCredentials: true}
      axios.defaults.withCredentials = true
      const { data } = await axios.post(
          `/api/v1/search/`,
          {word},
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
        dispatch({
          type:"SearchPoemSuccess",
          payload: data.allTagSearchedPoems,
        })
  } catch (error) {
    dispatch({
      type: "SearchPoemFailure",
      payload: error.response.data.message
    })
  }
}

export const likeDislikePoemAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "LikeDislikeRequest"
    })
    axios.defaults.withCredentials = true;
    const {data} = await axios.put(`/api/v1/likeDislikePoem/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
      }
    }
    );
    dispatch({
      type: "LikeDislikeSuccess",
      payload: data.poemToBeLikedDisliked,
      payload2: data.likeStatus
    })
    // window.location.reload()
  } catch (error) {
    dispatch({
      type: "LikeDislikeFailure",
      payload: error.response.data.message
    })
  }
}




export const addCommentAction = (id, comment) => async (dispatch) => {
  try {
      //request
      dispatch({
          type: "AddCommentRequest"
      })
       //success
      // {withCredentials: true}
      axios.defaults.withCredentials = true
      const { data } = await axios.put(
          `/api/v1/addComment/${id}`,
          {
            comment
          },
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
        dispatch({
          type:"AddCommentSuccess",
          payload: data.commentAddedPoem,
        })
        // window.location.reload()
  } catch (error) {
    dispatch({
      type: "AddCommentFailure",
      payload: error.response.data.message
    })
  }
}