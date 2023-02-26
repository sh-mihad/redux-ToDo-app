import{createStore} from 'redux'
import rootReduder from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
const store = createStore(rootReduder,composeWithDevTools())

export default store