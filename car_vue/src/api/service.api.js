import config from "@/../config";
import axios from "axios";

export default {
    getAllServices(params = {}, onSuccess, onError) {
        return axios
            .get(`${config.host}/service/all`, params)
            .then(onSuccess)
            .catch(onError);
    }
};
