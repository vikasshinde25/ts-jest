// import * as actionTypes from "../actions";

// const initialState = {
//   isLoading: false,
//   data: {},
//   error: null,
//   isAuthenticated: false,
//   userInfo: {},
//   showForgotMsg: false,
//   showResetMsg: false,
//   hideHeader: false,
//   isInternalUser: null,
//   showDynamicMsg: {},
// };

// const userStateReducer = (state : initialState, action:any) => {
//   switch (action.type) {
//     case actionTypes.USER_REQUEST_INITIATED:
//       return {
//         ...state,
//         isLoading: true,
//         error: null,
//       };
//     case actionTypes.USER_REQUEST_SUCCESS:
//       return {
//         ...state,
//         isLoading: false,
//         data: action.payload,
//         error: null,
//         isAuthenticated: true,
//         userInfo: {
//           ...action.payload,
//         },
//       };
//     case actionTypes.USER_REQUEST_FAILED:
//       return {
//         ...state,
//         isLoading: false,
//         data: {},
//         error: action.error,
//       };

//     default:
//       return state;
//   }
// };

// export default userStateReducer;
