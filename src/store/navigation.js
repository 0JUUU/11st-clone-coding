export default {
  namespaced: true,
  state: () => ({ // state: 객체 데이터를 반환 (팩토리 함수)
    // data는 항상 factory 함수로 만들어야함!
    isShow: false,
    isShowRNB: false,
  }),
  getters: {    // state와 연결되며 computed의 개념과 동일 (이름만 다를뿐~!)

  },
  mutations: {  // mutations 사용할 때는 commit
    // data를 수정할 수 있는 권한이 actions에는 없고 mutations에 있다! => mutations에서 수정해줘야함
    setState(state, payload) {
      // 굳이 true로 변경하는 메서드, false로 변경하는 메서드를 만들지 않고
      // 하나의 메서드로 통합
      // 범용화하는 state를 갱신하는 기능 생성
      // heropy : 객체 데이터임을 전제함
      // const heropy = {
      // isShow: true
      // }
      // ['isShow']
      Object.keys(payload).forEach(key => {
        //state.isShow = true
        state[key] = payload[key]
      })
    }
  },
  actions: {    // actions을 실행할 때는 dispatch
    // {} : 컨텍스트 객체 -> 구조분해 할당을 통해 꺼내쓸 수 있음
    // {state, getters, commit, dispatch} 사용해서 접근 간으
    onNav ({ commit }, name) {
      commit('setState', {
        [`isShow${name}`]: true
      })
    },
    offNav ({ commit }, name) {
      commit('setState', {
        [`isShow${name}`]: false
      })
    },
  }
}
