import axios from 'axios'

export default {
  install(app) {
    app.config.globalProperties.$fetch = async options => {
      const { requestName } = options   // 객체 구조 분해 할당
      const { data } = await axios({
        url: `https://trusting-williams-8cacfb.netlify.app/.netlify/functions/main?apiKey=1216&requestName=${requestName}`,
        method: 'GET',
      })
      console.log('fetch >> ' + data)
      return data
    }
  }
}
