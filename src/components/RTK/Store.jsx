import { configureStore, createSlice ,applyMiddleware} from "@reduxjs/toolkit"
// import thunk from 'redux-thunk'
    const initialState={
        task:[],
    }

// create a slice 

const taskreducer = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask(state, action) {
            state.task.push(action.payload);
    //    state.task=[...state.task,action.payload] ;  // other way;
        },
        deleteTask(state, action) {
            state.task = state.task.filter((currTask, index) => {
                return index !== action.payload;
            });
        },
        clearTask(state) {
            state.task = [];  // This correctly clears the task array
        },
    }
});

export const {addTask,deleteTask,clearTask}=taskreducer.actions; // ACtion creators.

// create a store 
 export const store = configureStore({
    reducer:{
        taskreducer:taskreducer.reducer,
    },
    
})



