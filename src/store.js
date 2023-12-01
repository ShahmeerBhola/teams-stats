import { createStore } from 'redux';
import teamReducer from './redux/reducer/team';

const store = createStore(teamReducer);

export default store;