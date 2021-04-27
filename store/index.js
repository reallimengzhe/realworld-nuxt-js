export function state() {
  return {
    UserInfo: {},
  }
}

export const mutations = {
  //
  setUserInfo(state, data) {
    state.UserInfo = data
  },
}
