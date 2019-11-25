import appointmentApi from '@/api/appointment.api';

const state = {
  appointments: [],
  statusEnum:[]
}

const getters = {
  getShopAppointments: state => state.appointments,
  getStatusEnum: state => state.statusEnum
}

const mutations = {
  SET_SHOP_APPOINTMENTS(state, appointment){
    state.appointments = appointment
  },
  SET_STATUS_ENUM(state, statusEnum){
    state.statusEnum = statusEnum
  }
}

const actions = {

  async createAppointmentAction({ commit }, body){
    return await appointmentApi.createAppointment(
      body,
      result =>{
        return result;
      },
      error =>{
        return error.response;
      }
    )
  },

  getAppointmentsShopAction({ commit }, params){
    appointmentApi.getAppointmentsShop(
      params,
      result =>{
        commit('SET_SHOP_APPOINTMENTS', result.data)
      },
      error =>{
        return error.response;
      }
    )
  },

  getStatusEnumAction({ commit }){
    appointmentApi.getStatusEnumApi(
      result =>{
        commit('SET_STATUS_ENUM',result.data)
      },
      error =>{
        return error.response;
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
