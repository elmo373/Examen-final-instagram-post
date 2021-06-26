import React from 'react';
import "./styles/ComponenteCss.css";
// <div className=""></div>//
export default function Component(props) {
    return (
        <>
        <div className="section">
            <div className="container">
                <div className="arriba">
                    <div className="imagenfondo">
                        <img src={props.data.imagenfondo1} alt=""/>
                    </div>
                </div>
                <div className="centro">
                    <div className="imagenperfil">
                        <img src={props.data.imagenperfil1} alt=""/>
                    </div>
                    <h2 class="nombre">
                        {props.data.nombre}
                    </h2>
                    <h3 class="trabajo">
                        {props.data.trabajo}
                    </h3>
                </div>
                <div className="abajo">
                    <div className="descripcion">
                        {props.data.descripcion}
                    </div>
                    <div class="logo1">
                        <img src={props.data.imagenlogo1} alt=""/>
                        <p class="titulo">{props.data.logotexto}</p>        
                    </div>
                    <div class="logo2">
                        <img src={props.data.imagenlogo2} alt=""/>
                        <p class="titulo">{props.data.logotexto}</p>        
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}