import { makeRequest } from "../api";
import Constants from "../Utils/Constants";
import { ToastContainer, toast } from "react-toastify";

toast.configure();

export const actions = {
  Login: "Login",
};

export const login = (user) => {
  return {
    type: actions.Login,
    payload: user,
  };
};

export const loginAsync = (username, password) => {
  return (dispatch) => {
    {
      /*login endpoint below*/
    }
    return makeRequest("post", { username, password })
      .then((user) => {
        const status = user?.data?.status;
        if (status == 204) {
          toast("Wrong Credentals");
          dispatch(login({ error: user.data.message }));
        } else {
          dispatch(login(user.data.data));
 
          // Save data to sessionStorage
          localStorage.setItem(
            "sessionInfoUser.id",
            user?.data?.data?.vendorInfo?.id
          );
          localStorage.setItem("sessionInfo.role", user?.data?.data?.role);
          localStorage.setItem(
            "customerUser.name",
            user?.data?.data?.customer?.displayName
          );
          localStorage.setItem(
            "customerUser.id",
            user?.data?.data?.customer?.accountName
          );
          localStorage.setItem("sessionInfo", JSON.stringify(user?.data?.data));

          toast("Successfully logged in");
        }
      })
      .catch((exception) => {
        //dispatch an error instead
        if (this?.user?.data?.data?.role === "ROLE_USER_ADMIN") {
          dispatch(login({ name: "ROLE_USER_ADMIN", type: Constants.admin }));
        } else {
          dispatch(
            login({ name: "ROLE_REGULAR_USER", type: Constants.regular })
          );
        }
      })
      .then(() => {
        //optional action
      });
  };
};
