export default function({ $axios }) {
  // 设置 请求 token
  process.client &&
    localStorage &&
    localStorage['jwtToken'] &&
    $axios.setToken(localStorage['jwtToken'], 'Token')

  // // onResponse
  // $axios.onResponse(response => {
  //   const { status } = response
  //   // console.log(data);
  //   if (status === 200 && status === 201 && status === 204) {
  //     return Promise.resolve(response)
  //   }
  //   // console.log(response)
  //   return Promise.reject('error')
  // })
  // // onError
  $axios.onError(error => {
    const { message, response } = error
    const { data } = response
    return data ? Promise.reject(data) : Promise.reject(message)
  })
}
