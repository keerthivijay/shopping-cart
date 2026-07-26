import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "user",
    initialState: {
        userList: [],
        userDetails: null
    },
    reducers: {
        createUser: (state, action) => {
            console.log("Creating user:", action.payload);
            state.userList.push(action.payload);
            console.log("Updated user list:", state.userList);``
        },
        loginUser: (state, action) => {
            const { username, password } = action.payload;
            const user = state.userList.find(user => user.email == username && user.password == password);
            state.userDetails = user || null;
            if(user) {
                localStorage.setItem("auth", JSON.stringify(user));
                localStorage.setItem("isAuthenticated", true);
            }
        },
        logoutUser: (state, action) => {
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('auth');
            state.userDetails = null;
        },
        checkLoginStatus: (state, action) => {
            return state.userDetails;
        }
    }
});

export const { createUser, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;