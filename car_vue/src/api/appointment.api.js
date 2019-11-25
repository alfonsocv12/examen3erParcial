import config from "@/../config";
import axios from "axios";

export default {
    getAllShops(params = {}, onSuccess, onError) {
        return axios
            .post(`${config.host}/appointment`, {body: params})
            .then(onSuccess)
            .catch(onError);
    }
};
