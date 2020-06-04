export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export function login(user) {
  return {
    type: LOGIN,
    payload: user
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}

export default (state = {
  isAuthenticatedUser: !!sessionStorage.getItem("user"),
  user: JSON.parse(sessionStorage.getItem("user")) || {},
  isLoading: false,
  error: null
}, action) => {
  switch (action.type) {
    case LOGIN:
      sessionStorage.setItem("user", JSON.stringify(action.payload));
      return {...state, isAuthenticatedUser: true, user: action.payload};
    case LOGOUT:
      return {...state, isAuthenticatedUser: false, user: {}};
    default:
      return state;
  }
};
