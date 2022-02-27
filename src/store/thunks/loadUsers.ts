import axios from 'axios';
import {setLoadng, setUsers} from '../slices/usersSlice';
import {AppDispatch} from '../store';

export default () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoadng(true));
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      dispatch(setUsers(res.data));
    } catch (err) {
      //handle error
    } finally {
      dispatch(setLoadng(false));
    }
  };
};
