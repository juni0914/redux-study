import { FETCH_COMMENTS, FETCH_COMMENTS_FAILURE, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS } from "./types";

export const fetchCommentSuccess = (comments) => {
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments
    }
}

export const fetchCommentFailure = (error) => {
    return {
        type: FETCH_COMMENTS_FAILURE,
        payload: error
    }
}

export const fetchCommentRequest = () => {
    return {
        type: FETCH_COMMENTS_REQUEST
    }
}


export const fetchComments = () => {
    return (dispatch) => {
        dispatch(fetchCommentRequest())
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res=> res.json())
        .then(comments=> dispatch(fetchCommentSuccess(comments)))
        .catch(error=> dispatch(fetchCommentFailure(error)))
    }
}