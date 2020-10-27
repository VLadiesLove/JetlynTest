import listAPI from "../api/api";

const SET_USERS = "SET_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_INFO = "TOGGLE_INFO";
const ERROR = 'ERROR'

const initialState = {
  isFetching: true,
  users: [
    {
      id: 101,
      firstName: "Sue",
      lastName: "Corson",
      email: "DWhalley@in.gov",
      phone: "(612)211-приложение для отображения данных в виде списка. 6296",
      message: "et lacus magna dolor…",
      timestamp: "2087-11-09T00:30:13.949Z",
    },
  ],
  toggleInfo: [101],
  error:false
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {

    case ERROR:{
        debugger
        return{
            ...state,
            error: action.isError
        }
    }
    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case TOGGLE_INFO: {
            let close=null;
            state.toggleInfo.map((o) => {
                if(o === action.id){
                    close = true;
                }
            }) 
            if (close) {
                return{
                    ...state,
                    toggleInfo: state.toggleInfo.map( (i) => {
                        if(i !== action.id){
                            return i
                        }
                    })
                }
            } else return{...state,
                          toggleInfo: [...state.toggleInfo, action.id]}
      
    }
    default:
      return state;
  }
};

export const setUsersActionCreator = (users) => {
  return { type: SET_USERS, users };
};

export const toggleIsFetchingActionCreator = (isFetching) => {
  return { type: TOGGLE_IS_FETCHING, isFetching };
};

export const toggleInfoActionCreator = (id) => {
  return { type: TOGGLE_INFO, id };
};

export const errorActionCreator = (isError) => {
    return { type: ERROR,isError };
  };

export const getUsersThunkCreator = (rows, delay) => {
  return (dispatch) => {
    listAPI
      .getUsers(rows, delay)
      .then((response) => {
        dispatch(errorActionCreator(false))
        dispatch(setUsersActionCreator(response.data));
        dispatch(toggleIsFetchingActionCreator(false));
      })
      .catch((error) => {
        dispatch(errorActionCreator(true));
        return error;
      });
  };
};

export default listReducer;
