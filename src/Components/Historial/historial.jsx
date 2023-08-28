import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUrls } from "../../Redux/action.jsx";
import { Link } from "react-router-dom";
import style from "../Historial/historial.module.css";

const Historial = () => {

    const response = useSelector((state) => state.link )
    const result = useSelector((state) => state.links )

    const [ verLinks, setVerLinks ] = useState(0)

    console.log(verLinks)

    const dispatch = useDispatch()

    const verHistorial = () => {
        console.log("historial desplagado")
        setVerLinks(1)
    }

    const ocultarHistorial = () => {
        console.log("historial ocultado")
        setVerLinks(0)
    }

    useEffect(() => {
        if (response) {
            dispatch(getUrls())
        }
    }, [response, dispatch])

    //useEffect(() => {
    //    dispatch(getUrls())// estos datos se guardan en cache
    //    console.log("se ejecuto primero")
    //}, [])

    // falta dinamica
    const resultados = JSON.parse(localStorage.getItem("result"))// convertimos un objeto javaScript Json 
    
    return(
        <div>
            <h1>Historial de enlaces</h1>

            {
                verLinks === 0 ? (
                    <div>
                        <button
                            className={style.buton_true}
                            onClick={() => verHistorial()}
                        >Ver Historial</button>
                    </div>
                ): (
                    <div>
                        <button
                            className={style.buton_false}
                            onClick={() => ocultarHistorial()}
                        >Ocultar Historial</button>
                    </div>
                )
            }

            <div className={style.historial} >

                {
                    verLinks === 0 ? (
                        <></>
                    ): (
                        !resultados ? (
                            <>
                            </>
                        ): (
                            resultados.map((dato, index) => {
                                return(

                                    <div key={dato.id} className={style.container_padre_historial} >
                                        <div key={dato.id} className={style.container_historial}>
                                            <span><Link to={dato.Original_URL} className={style.link} >{dato.Short_URL}</Link></span>
                                        </div>

                                        <div className={style.historial_button_container}>
                                            <button
                                                
                                            >Delete</button>
                                        </div>
                                    </div>
                                )
                            })
                        )
                    )
                }

            </div>

        </div>
    )
}

export default Historial