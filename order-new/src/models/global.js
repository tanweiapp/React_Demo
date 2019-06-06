
export default  {

  namespace: 'global',

  state: {
    userInfo:{
      email:null,
      pwd:null,
      key:null
    }
  },

  subscriptions: {},
 
  effects: { 
    // dispatch
    // 调用查看类型，获取参数调用reducers
    *setUserInfo({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'set_userinfo' , payload });
    },
  },

  reducers: {
    // 设置用户信息
    set_userinfo(state, {payload}) {
      return { ...state, userInfo:payload };
    },
  },

};


