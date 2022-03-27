import axios from "axios"
import queryString from "query-string"

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs
const axiosClient = axios.create({
   baseURL: "https://localhost:44306/api",
   headers: {
      "content-type": "application/json",
   },
   paramsSerializer: (params) => queryString.stringify(params),
})

// Add a request interceptor
axiosClient.interceptors.request.use(
   function (config) {
      // Do something before request is sent
      return config
   },
   function (error) {
      // Do something with request error
      return Promise.reject(error)
   }
)

// Add a response interceptor
axiosClient.interceptors.response.use(
   function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response
   },
   function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error)
   }
)

export default axiosClient
