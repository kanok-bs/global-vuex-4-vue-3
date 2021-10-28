import { GET_AUTH_STATUS } from "../getter-types";
import { ADD_AUTHENTICATE_STATUS } from "../action-types";
import { SET_AUTHENTICATE_STATUS } from "../mutation-types";
import axios from "axios";
export const state = () => ({
    IsAuthenticated:false
});
export const getters = {
    [GET_AUTH_STATUS]: (state:any) => {
      return state.IsAuthenticated;
    }
};
export const mutations = {
  [SET_AUTHENTICATE_STATUS](state: any, data: any) {
    state.IsAuthenticated = data;
  },
};
export const actions = {
  async [ADD_AUTHENTICATE_STATUS]({ commit }: { commit: any }, status: any) {
    commit("SET_AUTHENTICATE_STATUS", status);
  },
};
