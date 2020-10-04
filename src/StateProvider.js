import React, {createContext, useContext, useReducer} from 'react'; 

// Prepares the dataLayer
export const StateContext = createContext()
// Wrap our app and privide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext)  //useContext(props)    props:指的是上下文的内容信息


// 以上代码Context和reducer的功能,相当于Redux的功能,是有可复制性, 业务逻辑代码在reducer.js, index.js
