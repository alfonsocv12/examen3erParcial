import config from "@/../config";
import axios from "axios";

export default {
    getAllShops(params = {}, onSuccess, onError) {
        return axios
            .get(`${config.host}/shop/all`, {params: params})
            .then(onSuccess)
            .catch(onError);
    }
};
