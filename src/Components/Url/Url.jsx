import React, {useEffect, useState} from "react";
import style from "../Url/url.module.css";
import { useDispatch, useSelector } from "react-redux";
import { postUrl } from "../../Redux/action.jsx";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Historial from "../Historial/historial.jsx";

const Url = () => {

    const response = useSelector((state) => state.link )
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [ Original_URL, setUrlOriginal ] = useState("")
    const [ Short_URL, setUrlShort ] = useState("")
    //errores de estados
    const [ ErroOriginalURL, setErrorUrlOriginal ] = useState("")
    const [ ErroShortURL, setErrorUrlShort ] = useState("")

    const inputChangeOriginal = (e) => {
        setUrlOriginal(e.target.value)
    }

    const inputChangeShort = (e) => {
        setUrlShort(e.target.value)
    }

    //const urlPattern = RegExp(/^[a-zA-Z ,]+$/)

    // controlar los inputs

    const validateOriginalURL = () => {
        if (!Original_URL) {
            return "La url original esta vacia"
        }
        return ""
    }

    const validateShortURL = () => {
        if (!Original_URL) {
            return "La url corta esta vacia"
        }
        return ""
    }

    // enviamos datos al server
    const handleSubmitInput = async (e) => {
        try {

            e.preventDefault()
            console.log("datos enviados")
    
            const datos = {
                Original_URL,
                Short_URL
            }
            
            await dispatch(postUrl(datos))
            
        } catch (error) {
            console.log(error)
        }
    }

    const redirigir = () => {
        navigate(`/?success=${Short_URL}`)// esto se redirigira con la respuesta del back
    }

    useEffect(() => {

        if (response) {
            redirigir()
        }
    }, [response, navigate])

    return(

        <div className={style.container_one}>

            <div className={style.container}>

                <form className={style.form_container} onSubmit={(e) => handleSubmitInput(e)}>
                    <div className={style.container_div}>
                        <div>
                            <label className={style.title_label}>Url Original</label>
                        </div>
                        <br />
                        <input className={style.input_url_original} value={Original_URL} onChange={(e) => inputChangeOriginal(e)} type="text" placeholder="Ingresa url" />
                    </div>
                    <div className={style.container_div}>
                        <div>
                            <label className={style.title_label}>Url Short</label>
                        </div>
                        <br />
                        <input className={style.input_url_original} onChange={(e) => inputChangeShort(e)} value={Short_URL} type="text" placeholder="url nueva" />
                    </div>

                    <div>
                        <button className={style.buttom} type="submit">Enviar</button>
                    </div>
                </form>

            </div>

            <Historial />


        </div>

    )
}

export default Url