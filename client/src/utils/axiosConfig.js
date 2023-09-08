const getTokenFromLocalstorage = localStorage.getItem("user")
  ? localStorage.getItem("user")
  : null;
export const config = {
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalstorage !== null ? localStorage.getItem("token") : ""
    }`,
    Accept:'application/json',
    'Access-Control-Allow-Oringin':"*",
    "Access-Contoll-Allow_Methos":"GET,PUT,POST,DELETE,PATCH,OPTIONS"
  },
};
