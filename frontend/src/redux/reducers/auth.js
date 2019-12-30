const initialState = {
    token: localStorage.getItem('authToken'),
    isAuthenticated: null,
    isLoading: false,
    user: null
}

const authReducer = (state = initialState, action) => {
    switch(state){
        default:
            return state;
    }
};

export default authReducer;