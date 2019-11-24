import Vue from 'vue'
import Vuex from 'vuex'

import actions from "@/store/actions";
import store from "@/store/store";
import mutations from "@/store/mutations";

import service from "@/store/modules/service.store";
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    service: service
  },
  store: store,
  mutations: mutations,
  actions: actions
});
