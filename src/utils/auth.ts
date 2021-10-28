
import * as auth from "@/store/index";

export const AuthGuard = async (to: any, from: any, next: any) => {
  if (auth.default.getters.GET_AUTH_STATUS) {
    return next();
  } else {
    next({ name: "Login" });
    return;
  }
};
