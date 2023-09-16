import { combineReducers } from "redux";
import subcribersReducers from "./subscribers/reducer";
import viewsReducer from "./views/reducer";
import commentsReducer from "./comments/reducer";

const rootReducer = combineReducers({
    views: viewsReducer,
    subscribers: subcribersReducers,
    comments: commentsReducer
})

export default rootReducer
