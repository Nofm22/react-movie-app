import {combineReducers, legacy_createStore as createStore,applyMiddleware} from 'redux'
import { FilmHome } from './reducers/FilmHome';
import { ModalReducers } from './reducers/ModalReducers';
import { OverlayReducers } from './reducers/OverlayReducers';
import reduxThunk from 'redux-thunk'

import { DetailFilmReducers } from './reducers/DetailFilmReducers';
import { LoadingReducers } from './reducers/LoadingReducers';
const rootReducers = combineReducers({
    FilmHome,
    ModalReducers,
    OverlayReducers,
    DetailFilmReducers,
    LoadingReducers,
})




export const store = createStore(rootReducers,applyMiddleware(reduxThunk));