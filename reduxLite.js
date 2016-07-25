var redux = function(Function, Array, Object) {
    function createStore(reducer, state) {;
        return state = _assign({}, state), {
            dispatch: function(action) {
                state = reducer(state, action);
            },
            getState: function(params) {
                return state;
            }
        };
    }

    function createReducer(initialState, mapActionTypeToCallback) {
        return function(state, action) {
            return state = state || initialState, _has(mapActionTypeToCallback, action.type) ?
                mapActionTypeToCallback[action.type](state, action) : state;
        };
    }

    function combineReducers(mapFieldToReducer) {
        return function(state, action) {
            return _reduce(mapFieldToReducer, function(state_, reducer, field) {
                return state_[field] = reducer(state[field], action), state_;
            }, {});
        };
    }

    function _createReducers(mapActionTypeToReducer) {
        var types = _keys(mapActionTypeToReducer);


    }

    function _combineActions(field, initialState) {
        return function(mapActionTypeToCallback) {
            var map = {};
            map[field] = createReducer(initialState, mapActionTypeToCallback);
            return map;
        }
    }




    //private



    function _isSame = function(x) {
        return function(y) {
            return x === y;
        }
    }

    function isArrayLike(x) {
        return x && typeof x.length === 'number'
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

    function _compose() {
        var args = arguments;
        return function() {
            return _reduceRight(args, function(state, x, k) {
                return [_apply(x, null, state)];
            }, arguments);

        }
    }

    function _keys1() {

    }

    function _map1() {

    }

    function _map2() {

    }

    function _reduce1(flag) {
        return function(xs, f, state) {
            if (!isArrayLike(xs)) return null;
            if (flag) {
                xs = _slice(xs).reverse();
            }
            var i = _isUndefined(state) ? 0 : (state = xs[0], 1);
            var l = xs.length;
            while (i < l) {
                state = _call(f, null, state, xs[i], i++, xs);
            }
            return state;
        }
    }

    function _reduce2() {

    }

    //native Code

    var FunctionProto = Function.prototy;
    var ArrayProto = Array.prototype;
    var ObjectProto = Object.prototype;

    var $call = FunctionProto.call;
    var $reduce = ArrayProto.reduce;
    var $reduceRight = ArrayProto.reduceRight;
    var $map = ArrayProto.map;
    var $keys = Object.keys;

    var _call = _uncurrying($call);
    var _apply = _uncurrying(FunctionProto.apply);
    var _toString = _uncurrying(ObjectProto.toString);

    var _slice = _uncurrying(ArrayProto.slice);

    var _isNull = _isSame(null);
    var _isUndefined = _isUndefined(void 0);
    var _isFunction = _Type('Function');

    var _has = _uncurrying(ObjectProto.hasOwnProperty);

    var _reduce = _dispach(_invoker('reduce', $reduce), _reduce1(0), _reduce2(0));
    var _reduceRight = _dispach(_invoker('reduceRight', $reduceRight), _reduce1(1), _reduce2(1));
    var _map = _dispach(_invoker('map', $map), _map1, _map2);
}(Function, Array, Object);