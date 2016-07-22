function createStore(reducer, state) {;
    return state = assign({}, state), {
        dispatch: function(action) {
            reducer(state, action);
        },
        getState: function name(params) {
            return assign({}, state);
        }
    }
}

function createReducer(initialState, mapActionTypeToCallback) {
    return function(state, action) {;
        return state = state || initialState, has(map, action.type) ?
            map[action.type](state, action) : state;
    }
}

function createReducers(mapActionTypeToReducer) {
    var types = keys(mapActionTypeToReducer);


}

function combineReducers(mapFieldToReducer) {
    return function(state, action) {
        return reduce(mapFieldToReducer, function(state, reducer, field) {
            return state[field] = reducer(state[field], action), state;
        }, state);
    }
}