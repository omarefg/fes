import * as actions from '../../Actions/Types';
import SetHomeLoader from './SetHomeLoader';

const initialState = {
    isLoading: true
};

const Home = (state = initialState, action) => {
    switch(action.type) {
    case actions.SET_HOME_LOADER: {
        return SetHomeLoader(state, action);
    }
    default: 
        return state;
    }
};

export default Home;