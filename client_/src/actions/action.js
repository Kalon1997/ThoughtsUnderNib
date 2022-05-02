import axios from "axios";

export const registerAction = (username, email, password) => async (dispatch) => {
    try {
        //request
        dispatch({
            type: "RegisterRequest"
        })
        //success
        // {withCredentials: true}
        axios.defaults.withCredentials = true
        const { data } = await axios.post(
            "http://localhost:5000/api/v1/register",
            { username, email, password },
            {
              headers: {
                "Content-Type": "application/json",
              }
            }
          );
          dispatch({
            type:"RegisterSuccess",
            payload: data.user
          })
    } catch (error) {
      dispatch({
        type: "RegisterFailure",
        payload: error.response.data.message
      })
    }
}



export const loginAction = (email, password) => async (dispatch) => {
  try {
      //request
      dispatch({
          type: "LoginRequest"
      })
      //success
      // {withCredentials: true}
      axios.defaults.withCredentials = true
      const { data } = await axios.post(
          "http://localhost:5000/api/v1/login",
          { email, password },
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
        dispatch({
          type:"LoginSuccess",
          payload: data.user,
          payloadUsername: data.user.username,
        })
        window.location.assign('/')
  } catch (error) {
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message
    })
  }
}



export const forgotPasswordAction = (email) => async (dispatch) => {
  try {
      //request
      dispatch({
          type: "ForgotPasswordRequest"
      })
      //success
      // {withCredentials: true}
      // axios.defaults.withCredentials = true
      const { data } = await axios.post(
          "http://localhost:5000/api/v1/forgot/password",
          { email },
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
        dispatch({
          type:"ForgotPasswordSuccess",
          // payload: data.user,
        })
  } catch (error) {
    dispatch({
      type: "ForgotPasswordFailure",
      payload: error.response.data.message
    })
  }
}



export const resetPasswordAction = (password, resetToken) => async (dispatch) => {
  try {
      //request
      dispatch({
          type: "ResetPasswordRequest"
      })
      //success
      // {withCredentials: true}
      // axios.defaults.withCredentials = true
        await axios.put(
          `http://localhost:5000/api/v1/password/reset/${resetToken}`,
          {password},
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
        dispatch({
          type:"ResetPasswordSuccess",
          // payload: data.user,
        })
        window.location.assign('/')
  } catch (error) {
    dispatch({
      type: "ResetPasswordFailure",
      payload: error.response.data.message
    })
  }
}

export const loadUserAction = () => async (dispatch) => {
  try {
      //request
      dispatch({
          type: "LoadUserRequest"
      })
      //success
      // {withCredentials: true}
      axios.defaults.withCredentials = true
      const { data } = await axios.get(
          "http://localhost:5000/api/v1/myProfile",
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
        dispatch({
          type:"LoadUserSuccess",
          payload: data.user
        })
  } catch (error) {
    dispatch({
      type: "LoadUserFailure",
      payload: error.response.data.message
    })
  }
}

export const logoutAction = () => async (dispatch) => {
  try {
      //request
      dispatch({
          type: "LogoutRequest"
      })
      //success
      // {withCredentials: true}
      axios.defaults.withCredentials = true
      await axios.get(
          "http://localhost:5000/api/v1/logout",
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
        dispatch({
          type:"LogoutSuccess",
        })
  } catch (error) {
    dispatch({
      type: "LogoutFailure",
      payload: error.response.data.message
    })
  }
}