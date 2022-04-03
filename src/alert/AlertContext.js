import React, { useContext, useState, useReducer } from "react";

// const AlertContext = React.createContext()
// const AlertToggleContext = React.createContext()

// export const useAlert = () => {
//     return useContext(AlertContext)
// }

// export const useAlertToggle = () => {
//     return useContext(AlertToggleContext)
// }

// export const AlertProvider = ({children}) => {

//     const [alert, setAlert] = useState(false)

//     const toggle = () => setAlert(prev => !prev)

//     return (
//         <AlertContext.Provider value={alert}>
//             <AlertToggleContext.Provider value={toggle}>
//                 {children}
//             </AlertToggleContext.Provider>
//         </AlertContext.Provider>
//     )
// }




const AlertContext = React.createContext()
// const AlertToggleContext = React.createContext()

export const useAlert = () => {
    return useContext(AlertContext)
}

// export const useAlertToggle = () => {
//     return useContext(AlertToggleContext)
// }

const SHOW_ALERT = 'show'
const HIDE_ALERT = 'hide'

const reducer = (state, action) => {
    switch(action.type) {
        case SHOW_ALERT: return {...state, visible: true, text: action.text}
        case HIDE_ALERT: return {...state, visible: false}
        default: return state
    }
}

export const AlertProvider = ({children}) => {

    // const [alert, setAlert] = useState(false)

    // const toggle = () => setAlert(prev => !prev)

    const [state, dispatch] =useReducer(reducer, {  // Можем более углубленно настроить код, работать еще с какими то данными
        visible: false,
        text: ''
    })

    const show = (text) => {
        dispatch({type: 'show', text})
    }

    const hide = () => {
        dispatch({type: 'hide'})
    }

    return (
        <AlertContext.Provider value={{
            visible: state.visible,
            show,
            hide,
            text: state.text
        }}>
            {children}
        </AlertContext.Provider>
    )

    // return (
    //     <AlertContext.Provider value={{
    //         visible: alert,
    //         toggle
    //     }}>
    //         {children}
    //     </AlertContext.Provider>
    // )
}