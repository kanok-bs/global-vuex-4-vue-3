import { SET_UNIVARSITIES } from "../mutation-types";
import { FETCH_UNIVARSITIES } from "../action-types";
import { GET_UNIVARSITIES } from "../getter-types";
import { UNIVARSITY_API } from "../api";
import axios from "axios";

export const state = () => ({
  univarsitiesData: [],
});
export const getters = {
  [GET_UNIVARSITIES]: (state: any) => {
    return state.univarsitiesData;
  },
};
export const mutations = {
  [SET_UNIVARSITIES](state: any, data: any) {
    state.univarsitiesData = data;
  },
};
export const actions = {
  async [FETCH_UNIVARSITIES]({ commit }: { commit: any }, searchParam: any) {
    await axios
      .get(`${UNIVARSITY_API}${searchParam}`)
      .then((response: any) => {
        commit("SET_UNIVARSITIES", response.data);
      }).catch((error: any) => {
        console.log(error);
      }
      );
  },
};
