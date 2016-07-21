//step0
// var ActionTypes = {
//     view0: {
//         field0: [
//             'ADD', 'DELETE', 'UPDATE'
//         ]
//     },
//     view1: {
//         field1: [
//             'ADD', 'DELETE', 'UPDATE'
//         ],
//         field2: [
//             'ADD2', 'DELETE', 'UPDATE'
//         ]
//     }
// };

// step1
//key可以是type，也可以是带命名空间的
//value可以是函数列表，也可以是函数
var mapActionTypeToReducer = {
    'view0.field0.ADD': function(state, action) {

    },

    'ADD2': [
        function(state, action) {

        }
    ]
};

var mapFieldToReducer = {
    field0: function(state, action) {
        return state = state || [], isEqual(action.type, )
    }
}

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

function createReducersForField() {

}

function combineReducers(mapFieldToReducer) {
    return function(state, action) {
        return reduce(mapFieldToReducer, function(state, reducer, field) {
            return state[field] = reducer(state[field], action), state;
        }, state);
    }
}