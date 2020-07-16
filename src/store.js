import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import rootReducer from './reducers'

export default createStore(rootReducer,applyMiddleware(thunk))

/*

Redux 的 store包含了如下成员

dispatch
subscribe
getState
replaceReducer
Symble（observable）

使用 redux的步骤
1. yarn add redux 
2. 创建 actionType 和 Action
3. 创建 Reducer
4. 创建 Store

5. 组件中导入 action
6. 通过props一步步往下传，在组件中拿到store
7. 使用store拿出state渲染初始页面。
8. 使用store的subscribe 方法订阅 store改变state。
9. 在组件中调用dispatch方法发送相应的action
10. 在reducer中监听相应的dispacth-action，作出state的更改。
 */