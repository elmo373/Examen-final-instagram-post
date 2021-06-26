import React from 'react';
import Component from './componentes/Componente';
import getContentComponents from './assets/getContentComponent';
import './global.css';

export default function App() {
    const data = getContentComponents();
    return (
        <div className="container_components">
            {
                data.map((component)=>{
                    return <Component data={component}/>
                })
            }
        </div>
    );
}