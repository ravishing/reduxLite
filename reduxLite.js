var redux = function(Function, Array, Object) {
    function createStore(reducer, state) {;
        return state = _assign({}, state), {
            dispatch: function(action) {
                reducer(state, action);
            },
            getState: function(params) {
                return _assign({}, state);
            }
        };
    }

    function createReducer(initialState, mapActionTypeToCallback) {
        return function(state, action) {
            return state = state || initialState, _has(mapActionTypeToCallback, action.type) ?
                mapActionTypeToCallback[action.type](state, action) : state;
        };
    }

    function $createReducers(mapActionTypeToReducer) {
        var types = _keys(mapActionTypeToReducer);


    }

    function combineReducers(mapFieldToReducer) {
        return function(state, action) {
            return _reduce(mapFieldToReducer, function(state, reducer, field) {
                return state[field] = reducer(state[field], action), state;
            }, state);
        };
    }

    //native Code

    var FunctionProto = Function.prototy;
    var ArrayProto = Array.prototype;
    var ObjectProto = Object.prototype;

    var $call = FunctionProto.call;
    var $reduce = ArrayProto.reduce;
    var $map = ArrayProto.map;
    var $keys = Object.keys;


    //so...



    function _isSame = function(x) {
        return function(y) {
            return x === y;
        }
    }

    function _Type(type) {
        return function(x) {
            return _toString(x) === '[object ' + type + ']';
        };
    }


    function _uncurrying(fn) {
        return function() {
            $call.apply(fn, arguments);
        }
    }


    function _dispach() {
        var args = _slice(arguments);
        return function() {
            var tmp = null;
            for (var i = 0, l = args.length; i < l; ++i) {
                if (_isNull(tmp = _apply(args[i], arguments))) break;
            }
            return tmp;
        }
    }

    function _invoker(methodName, f) {
        return function(target) {
            return target && _isFunction(f) && target[methodName] === f ? _call.apply(f, arguments) : null;
        }
    }

    var _call = _uncurrying($call);
    var _apply = _uncurrying(FunctionProto.apply);
    var _toString = _uncurrying(ObjectProto.toString);

    var _slice = _uncurrying(ArrayProto.slice);

    var _isNull = _isSame(null)
    var _isUndefined = _isUndefined(void 0);
    var _isFunction = _Type('Function');

    var _has = _uncurrying(ObjectProto.hasOwnProperty);

    var _reduce = _dispach(_invoker('reduce', $reduce), _reduce1, _reduce2);
    var _map = _dispach(_invoker('map', $map), _map1, _map2);
}(Function, Array, Object);