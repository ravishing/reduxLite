
###step0:想清楚有多少域以及动作类型
    var ActionTypes = {
        field0: {
            'ADD': 'ADD',
            'DELETE': 'DELETE'
        },
        field1: {
            'ADD': 'ADD',
            'DELETE': 'DELETE'
        },
        field2: {
            'ADD': 'ADD',
            'DELETE': 'DELETE',
            'UPDATE': 'UPDATE'
        },
        'COMMON_ADD': 'COMMON_ADD'
    };

### step1：为每一种类型编写reducer
    var mapActionTypeToReducer = {
        'field0.ADD': function(state, action) {
            return state = state || {
                'x': 0
            }, assign({}, {
                'x': state.x + 1
            });
        },
        'field0.DELETE': function(state, action) {
            return state = state || {
                'x': 0
            }, assign({}, {
                'x': state.x - 1
            });
        },

        'COMMON_ADD': [
            function(state, action) {
                return state = state || {
                    'y'：
                    0
                }, assign({}, state, {
                    'y': state.y + 1
                })
            },
            function(state, action) {
                return state = state || {
                    'z'：
                    0
                }, assign({}, state, {
                    'z': state.z + 1
                })
            }
        ]
    };

###step2：组合所有的reducer为一个reducer
    var appReducer = createReducers(mapActionTypeToReducer);

###step3：创建store
    var store = createStore(appReducer, INITIAL_STATE);

###step4：创建路由
    var dispatcher = store.dispatch;

###step5：获取程序状态
    var getState = store.getState

###step6：订阅状态的变化
    var subscribe = store.subscribe;

###step7 
在任意view框架里分发action和监听store的变化吧，到这里已经将数据逻辑从view中完全拿出来了，并且将数据和数据的转换逻辑也进行了分离