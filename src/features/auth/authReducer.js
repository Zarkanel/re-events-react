import { LOGIN_USER, SIGN_OUT_USER } from "./authConstants"
import { createReducer } from "../../app/common/util/reducerUtils"

const initialState = {
    authenticated: false,
    currentUser: null
}

const loginUser = (state, playload) => {
    return {
        authenticated: true,
        currentUser: playload.creds.email
    }
}

const signOutUser = () => {
    return {
        authenticated: false,
        currentUser: null
    }
}

export default createReducer(initialState, {
    [LOGIN_USER] : loginUser,
    [SIGN_OUT_USER] : signOutUser
})