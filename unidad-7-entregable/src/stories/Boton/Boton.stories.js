import Boton  from "./Boton";

export default {
    component: Boton,
}
export const Siguiente = {
    args:
    {
        label: "Siguiente",
        primary: true,
        size: "large",
    }
};
export const Atras = {
    args:
    {
        label: "Atras",
        primary: false,
        size: "small",
    }
};
export const Cambios = {
    args:
    {
        label: "Guardar Cambios",
        primary: true,
        size: "medium",
    }
};
export const Submit = {
    args:
    {
        label: "Subir Respuestas",
        primary: true,
        size: "large",
    }
};
