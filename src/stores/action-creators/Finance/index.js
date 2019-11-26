import axios from '../../../helpers/AxiosHelper';
import { financeActions } from "../../actions/Actions";

export const fetchAllFinances = () => dispatch => {
  return axios.get('/finances')
    .then(
      response => dispatch({
        type: financeActions.FETCH_FINANCES,
        payload: { ...response.data }
      },
        error => {
          console.log(error)
        })
    )
}

