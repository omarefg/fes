import { SET_HOME_LOADER } from '../Types';

const SetHomeLoader = isLoading => {
    return {
        type: SET_HOME_LOADER,
        payload: {
            isLoading
        }
    };
};

export default SetHomeLoader;