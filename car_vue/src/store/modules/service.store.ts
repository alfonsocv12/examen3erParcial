import serviceApi from '@/api/service.api';

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

// const actions = {
//   getAllServicesAction({commit, state}, (data:any)){
//     serviceApi.getAllServices(
//       {},
//       (result:any) =>{
//         commit("SET_SERVICES", result.data);
//       },
//       (error:any) =>{
//         return error;
//       }
//     );
//   }
// }

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
