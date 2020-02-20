import { settings } from '../config/settings';
import * as ajaxRequest from '../helpers/httpHelper';


const registerUser = (userData) => {
    return ajaxRequest.post(settings.baseUrl + "registration", userData);
}



export default registerUser;