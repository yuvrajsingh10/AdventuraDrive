const getTokenFromLocalstorage = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;
export const config = {
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalstorage !== null ? getTokenFromLocalstorage : ""
    }`,
    Accept:'application/json',
    'Access-Control-Allow-Oringin':"*",
    "Access-Contoll-Allow_Methos":"GET,PUT,POST,DELETE,PATCH,OPTIONS"
  },
};
