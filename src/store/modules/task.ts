import { SET_TASK } from "../mutation-types";
import { ADD_TASK } from "../action-types";
import { GET_TASK } from "../getter-types";
import axios from "axios";

export const state = () => ({
  taskData: [],
});
export const getters = {
  [GET_TASK]: (state: any) => {
    return state.taskData;
  },
};
export const mutations = {
  [SET_TASK](state: any, data: any) {
    state.taskData.push(data);
  },
};
export const actions = {
  async [ADD_TASK]({ commit }: { commit: any }, data: any) {
    commit("SET_TASK", data);
  },
};
