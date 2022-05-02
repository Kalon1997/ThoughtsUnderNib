import {createReducer} from '@reduxjs/toolkit'
const initialState = {
    isAuth: false,
    loggedInUser: "Guest"
}
export const userReducer =createReducer(initialState, {
    
    RegisterRequest : (state) => {
        state.loading = true;
    },
    RegisterSuccess : (state,action) => {
        state.loading=false; 
        state.user=action.payload
    },
    RegisterFailure : (state,action) => {
        state.loading=false; 
        state.error = null;
        state.error=action.payload
    },


    LoginRequest : (state) => {
        state.loading = true;
    },
    LoginSuccess : (state,action) => {
        state.loading=false; 
        state.user=action.payload; 
        state.isAuth=true;
    },
    LoginFailure : (state,action) => {
        state.loading=false; 
        state.error = null;
        state.error=action.payload; 
        state.isAuth=false;
    },

    ForgotPasswordRequest : (state) => {
        state.loading = true;
    },
    ForgotPasswordSuccess : (state,action) => {
        state.loading=false; 
        state.user=action.payload; 
    },
    ForgotPasswordFailure : (state,action) => {
        state.loading=false; 
        state.error = null;
        state.error=action.payload; 
        state.isAuth=false;
    },

    ResetPasswordRequest : (state) => {
        state.loading = true;
    },
    ResetPasswordSuccess : (state,action) => {
        state.loading=false; 
        state.user=action.payload; 
    },
    ResetPasswordFailure : (state,action) => {
        state.loading=false; 
        state.error = null;
        state.error=action.payload; 
        state.isAuth=false;
    },

    LoadUserRequest : (state) => {
        state.loading = true; 
    },
    LoadUserSuccess : (state,action) => {
        state.loading=false; 
        state.user=action.payload; 
        state.isAuth=true;
        state.loggedInUser=action.payload.username; 
    },
    LoadUserFailure : (state,action) => {
        state.loading=false; 
        state.error = null;
        state.error=action.payload; 
        state.isAuth=false; 
    },

    
    LogoutRequest : (state) => {
        state.loading = true;
    },
    LogoutSuccess : (state) => {
        state.loading=false; 
        state.isAuth=false; 
    },
    LogoutFailure : (state, action) => {
        state.loading=false; 
        state.isAuth=true; 
        state.error = null;
        state.error=action.payload;
    },


})