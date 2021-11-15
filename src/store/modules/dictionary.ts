import { SET_DICTIONARY } from "../mutation-types";
import { FETCH_DICTIONARY } from "../action-types";
import { GET_DICTIONARY } from "../getter-types";
import { DICTIONARY_API } from "../api";
import axios from "axios";
import { Dictionary } from "../../model/Dictionary";

export const state = () => ({
  dictionaryData: [],
});
export const getters = {
  [GET_DICTIONARY]: (state: any) => {
    return state.dictionaryData;
  },
};
export const mutations = {
  [SET_DICTIONARY](state: any, data: any) {
    state.dictionaryData = data;
  },
};
export const actions = {
  async [FETCH_DICTIONARY]({ commit }: { commit: any }, searchValue: string) {
    await axios
      .get<Dictionary[]>(`${DICTIONARY_API}${searchValue}`)
      .then((response: any) => {
        const data: [Dictionary] = response.data;
        commit("SET_DICTIONARY", data);
      });
  },
};
