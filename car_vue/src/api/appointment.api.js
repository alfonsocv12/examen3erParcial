import config from "@/../config";
import axios from "axios";

export default {
    createAppointment(body = {}, onSuccess, onError) {
        return axios
            .post(`${config.host}/appointment`, body)
            .then(onSuccess)
            .catch(onError);
    }
};
