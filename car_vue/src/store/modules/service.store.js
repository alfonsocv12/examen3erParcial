import serviceApi from '@/api/service.api';
import shopApi from '@/api/shops.api';

const state = {
  services: []
}

const getters = {
  getServices: state => state.services
}

const mutations = {
  SET_SERVICES(state, services){
    state.services = services
  }
}

const actions = {

  getAllServicesAction({commit}, data){
    serviceApi.getAllServices(
      data,
      result =>{
        commit("SET_SERVICES", result.data);
      },
      error =>{
        return error;
      }
    );
  }

}

export default {
  namespaced: true,
  state: {
    ...state
  },
  getters: {
    ...getters
  },
  mutations,
  actions
};
