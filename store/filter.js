const state = ({
    value: 'Hello World',
    list: [1, 2, 3, 4, 5]
  });
  const getters = {
    include: (state) => (val) => {
      return state.list.indexOf(val) > -1;
    }
    }
  ;
  const mutations = {
    SET_VALUE(state, value) {
      state.value = value;
    }
  };
  const actions = {
    async getInfo({state, commit}, val) {
      commit('SET_VALUE', val);
    }
  };
  
  export default {
    namespaced: true,//使用这个文件的方法时，需要标注namespace
    state,
    getters,
    actions,
    mutations
  };