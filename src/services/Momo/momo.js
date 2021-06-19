import api from '../api';
import { getUrl, postWithFormData } from '../../functions/Services';

export const momoService = {
    payToMomo({ params }) {
        const url = getUrl(api.PAY_MOMO);
        return postWithFormData(params, url)
    },
}

