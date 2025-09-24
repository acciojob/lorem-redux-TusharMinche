import {configureStore} from '@reduxjs/toolkit'
import  loremReducer  from './state/loremSlice'
export default configureStore({
    reducer:{
        lorem: loremReducer
    }
})