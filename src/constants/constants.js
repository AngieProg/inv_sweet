import {mujer, hombre, ninos, iglesia, reloj, brindis, sobre, regalo, banco, cuentaBanco, persona, cuenta, whatsApp, celular, correo} from "./../assets/icon";
import { hotel1, hotel2, galeria1, galeria2, galeria3, galeria4, iglesiaIm, salon } from "../assets/images";

export const dressCode = [
    {
        icon: mujer,
        titulo1:'PARA MUJERES',
        titulo2:'Vestido Largo'
    },
    {
        icon: hombre,
        titulo1:'PARA HOMBRES',
        titulo2:'Etiqueta Formal'
    },
    {
        icon: ninos,
        titulo1:'PARA NIÑOS',
        titulo2:'Formal'
    },
];

export const ubicaciones = [
    {
        img: iglesiaIm,
        icon: iglesia,
        titulo1:'CEREMONIA RELIGIOSA',
        titulo2:'Iglesia Ejemplo',
        icon2: reloj,
        hora: '18:00',
        parrafo: 'Calle ejemplo #33, Colonia Ejemplo, Ciudad Ejemplo, Estado Ejemplo, CP:00000',
        btn1: 'VER EN GPS'
    },
    {
        img: salon,
        icon: brindis,
        titulo1:'RECEPCION',
        titulo2:'Salón Ejemplo',
        icon2: reloj,
        hora: '19:30',
        parrafo: 'Calle ejemplo #33, Colonia Ejemplo, Ciudad Ejemplo, Estado Ejemplo, CP:00000',
        btn1: 'VER EN GPS'
    }
];

export const regalos = [
    {
        icon: sobre,
        titulo2:'Luvia de Sobres',
        parrafo: 'Es la tradición de regalar dinero en efectivo en un sobre a la festejada el día del evento',
    },
    {
        icon: regalo,
        titulo2:'Amazon',
        parrafo:'Un detalle especial para la quinceañera. Entra al link para ver algunas ideas de regalos.',
        label: 'VER REGALOS'
    },
    {
        icon: banco,
        titulo2:'Datos Bancarios',
        parrafo: 'Si lo deseas, puedes realizar una transferencia a nuestra cuenta para dar un regalo a la quinceañera',
        datosBancarios:[
            {icon: cuentaBanco, nombre: 'BANCO EJEMPLO'},
            {icon: persona, nombre: 'TITULAR EJEMPLO'},
            {icon: cuenta, nombre: '5498238723459874'},
        ]

    }
];

export const confirmaciones = [
    {
        icon: whatsApp,
        titulo1: 'CONFIRMAR POR',
        titulo2:'Whatsapp',
        btn1: '+5587230943',
        btn2: '+5523876512'
    },
    {
        icon: celular,
        titulo1: 'CONFIRMAR POR',
        titulo2:'Llamada',
        btn1: '+5587230943',
        btn2: '+5523876512'
    },
    {
        icon: correo,
        titulo1: 'CONFIRMAR POR',
        titulo2:'Correo Electrónico',
        btn1: 'Enviar',
    }
];

export const datosInvitado = [    
            {icon2: persona, label:'PASES', input: '4'},
            {icon2: reloj, label:'MESA', input: '8'},
            {icon2: cuenta, label:'ASIENTO', input: '3-5'},
        
];

export const hoteles = [
    {
        image: hotel1,
        nombre: 'HOTEL EJEMPLO'
    },
    {
        image: hotel2,
        nombre: 'HOTEL EJEMPLO'
    }
];

export const data = [
    {   
        id:1,
        img: galeria1,
        alt: 'Foto 1'
    },
    {
        id:2,
        img: galeria2,
        alt: 'Foto 2'
    },
    {
        id:3,
        img: galeria3,
        alt: 'Foto 3'
    },
    {
        id:4,
        img: galeria4,
        alt: 'Foto 4'
    }
];


{/*export const dressCode = [
    {
        titulo1: 'DRESS CODE',
        titulo2: 'Código de Vestimenta',
        dCode:[
            {
                icon: mujer,
                genero:'PARA MUJERES',
                vestimenta:'Vestido Largo'
            },
            {
                icon: hombre,
                genero:'PARA HOMBRES',
                vestimenta:'Etiqueta Formal'
            },
            {
                icon: ninos,
                genero:'PARA NIÑOS',
                vestimenta:'Formal'
            }
        ]
    }
];*/}