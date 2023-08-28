import axios from "axios";
export const POST_URL = "POST_URL"
export const GET_URL = "GET_URL"
export const OCULT_HISTORY = "OCULT_HISTORY"

export const getUrls = () => {
    try {
        return async function (dispatch) {
            const urls = await axios.get("http://localhost:3001/getUrl")
            localStorage.setItem("result", JSON.stringify(urls.data)); // actualizo el local inmediatamente
            return dispatch({
                type : GET_URL,
                payload : urls.data
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export const postUrl = (dato) => {
    try {
        return async function (dispatch) {
            const url = await axios.post("http://localhost:3001/url", dato)
            return dispatch({
                type : POST_URL,
                payload : url.data
            })
        }
    } catch (error) {
        console.log(error)
    }
}