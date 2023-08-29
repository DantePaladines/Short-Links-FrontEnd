import axios from "axios";
export const POST_URL = "POST_URL"
export const GET_URL = "GET_URL"
export const OCULT_HISTORY = "OCULT_HISTORY"

const urlGetLocal = "http://localhost:3001/getUrl"
const urlGet = "https://short-links-bh20.onrender.com/getUrl"
const urlPostLocal = "http://localhost:3001/url"
const urlPost = "https://short-links-bh20.onrender.com/url"

export const getUrls = () => {
    try {
        return async function (dispatch) {
            const urls = await axios.get(urlGet)
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
            const url = await axios.post(urlPost, dato)
            return dispatch({
                type : POST_URL,
                payload : url.data
            })
        }
    } catch (error) {
        console.log(error)
    }
}