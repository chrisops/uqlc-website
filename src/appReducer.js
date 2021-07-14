import React from 'react'

export default function appReducer(currentState, action) {
    switch (action.type){
        case 'setPosts': {
            return {
                ...currentState,
                posts: action.newPosts
            }
        }
        case 'setAbout': {
            return {
                ...currentState,
                about: action.newAbout
            }
        }

        case "setToken": {
            localStorage.setItem("token", action.data.token)
            return {
                ...currentState,
                token: action.data.token
            }            
        }

        default:
            return currentState
    }
}


const context = React.createContext()
export { context }