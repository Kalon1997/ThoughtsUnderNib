import {createReducer} from '@reduxjs/toolkit'
const initialState = {
}

export const poemReducer = createReducer(initialState, {
    GetAllPoemsRequest : (state) => {
        state.loading = true;
    },
    GetAllPoemsSuccess : (state,action) => {
        state.loading = false;
        state.allPoems = action.payload;
        state.totalPages = action.totalPages;
    },
    GetAllPoemsFailure : (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },


    GetMyPoemsRequest : (state) => {
        state.loading = true;
    },
    GetMyPoemsSuccess : (state,action) => {
        state.loading = false;
        state.myPoems = action.payload;
    },
    GetMyPoemsFailure : (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },


    CreatePoemRequest : (state) => {
        state.loading = true;
    },
    CreatePoemSuccess : (state, action) => {
        state.loading = false;
        state.newPoem = action.payload;
    },
    CreatePoemFailure : (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },


    EditModeOnRequest : (state) => {
        state.editing = false;
        state.loading = false;
    },
    EditModeOnSuccess : (state, action) => {
        state.editing = true;
        state.loading = false;
        state.editingPoem = action.payload;
    },
    EditModeOnFailure : (state, action) => {
        state.editing = false;
        state.loading = false;
        state.error = action.payload;
    },


    EditSaveRequest : (state) => {
        state.editing = true;
        state.loading = false;
    },
    EditSaveSuccess : (state, action) => {
        state.editing = false;
        state.loading = false;
        state.editedPoem = action.payload;
    },
    EditSaveFailure : (state, action) => {
        state.editing = true;
        state.loading = false;
        state.error = action.payload;
    },


    DeletePoemRequest : (state) => {
        state.loading = true;
    },
    DeletePoemSuccess : (state, action) => {
        state.loading = false;
        state.editedPoem = action.payload;
    },
    DeletePoemFailure : (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },


    SearchPoemRequest : (state) => {
        state.loading = true;
    },
    SearchPoemSuccess : (state, action) => {
        state.loading = false;
        state.searchedByTagPoems = action.payload;
    },
    SearchPoemFailure : (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },


    LikeDislikeRequest : (state) => {
        state.loading = true;
        state.likeStatus = false;
    },
    LikeDislikeSuccess : (state, action) => {
        state.loading = false;
        state.likesDislikedPoem = action.payload;
        state.likeStatus = action.payload2;
    },
    LikeDislikeFailure : (state, action) => {
        state.loading = false;
        state.likeStatus = false
        state.error = action.payload;
    },


    AddCommentRequest : (state) => {
        state.loading = true;
    },
    AddCommentSuccess : (state, action) => {
        state.loading = false;
        state.commentAddedPoem = action.payload;
    },
    AddCommentFailure : (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
})