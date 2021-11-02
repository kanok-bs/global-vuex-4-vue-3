import { SET_POST } from "../mutation-types";
import { FETCH_POST } from "../action-types";
import { GET_POST } from "../getter-types";
import axios from "axios";
import {Post} from "../../model/Post";
import {reactive} from "vue";
export const state = () => ({
  postData: [],
});
export const getters = {
  [GET_POST]: (state: any) => {
    return state.postData;
  },
};
export const mutations = {
  [SET_POST](state: any, data: any) {
    state.postData = data;
  },
};
export const actions = {
  async [FETCH_POST] ({ commit }: { commit: any }) {
    await axios
    .get<Post[]>(`https://jsonplaceholder.typicode.com/posts`)
    .then((response: any) => {
        const data:[Post] = response.data; 
        console.log("data------>",data);
    //   console.log(response.data);
      commit("SET_POST", data);
    });
    
  },
};
