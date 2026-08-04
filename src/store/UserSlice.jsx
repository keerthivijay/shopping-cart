import { createSlice } from '@reduxjs/toolkit';
import { userList } from '../../data.json';

const userSlice = createSlice({
    name: "user",
    initialState: {
        userList: userList,//[]
        userDetails: null
    },
    reducers: {
        createUser: (state, action) => {
            console.log("Creating user:", action.payload);
            const exuserList = [...state.userList];
            exuserList.push(action.payload);
            state.userList = [ ...exuserList]
            console.log("Updated user list:", state.userList);
        },
        loginUser: (state, action) => {
            const { username, password } = action.payload;
            const user = state.userList.find(user => user.email == username && user.password == password);
            state.userDetails = (user!=undefined?{...user} : null);
            if(state.userDetails!=null) {
                localStorage.setItem("auth", JSON.stringify(user));
                localStorage.setItem("isAuthenticated", true);
            }
        },
        logoutUser: (state, action) => {
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('auth');
            state.userDetails = null;
        }
    }
});

export const { createUser, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;