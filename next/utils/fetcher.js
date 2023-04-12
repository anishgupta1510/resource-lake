import axios from "axios"
const fetcher = (url) => axios.get(url).then(res => res.data).catch(err => console.log(err))

export default fetcher