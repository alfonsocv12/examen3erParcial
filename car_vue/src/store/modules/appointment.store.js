import appointmentApi from '@/api/appointment.api';

const state = {
  appointment: []
}

const getters = {
  getAppointment: state => state.appointment
}

const mutations = {
  SET_APPOINTMENT(state, appointment){
    state.appointment = appointment
  }
}

const actions = {
  createAppointmentAction({ commit }, body){
    console.log(body);
    appointmentApi.createAppointment(
      body,
      result =>{
        console.log(result.data);
      },
      error =>{
        console.log('hola');
        console.log(error);
        return error;
      }
    )
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
