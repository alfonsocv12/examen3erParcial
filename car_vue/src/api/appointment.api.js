import config from "@/../config";
import axios from "axios";

export default {
    createAppointment(body = {}, onSuccess, onError) {
        return axios
            .post(`${config.host}/appointment`, body)
            .then(onSuccess)
            .catch(onError);
    },

    getAppointmentsShop(shop_id, onSuccess, onError){
      return axios
        .get(`${config.host}/appointment/all/${shop_id}`)
        .then(onSuccess)
        .catch(onError);
    },

    getStatusEnumApi(onSuccess, onError){
      return axios
        .get(`${config.host}/appointment/status_types`)
        .then(onSuccess)
        .catch(onError);
    },

    patchAppointment(_id, body = {}, onSuccess, onError){
      return axios
        .patch(`${config.host}/appointment/update/${_id}`, body)
        .then(onSuccess)
        .catch(onError);
    }
};
