const SetHomeLoader = (state, action) => {
    return {
        ...state,
        ...action.payload
    };
};

export default SetHomeLoader;