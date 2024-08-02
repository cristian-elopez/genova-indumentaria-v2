import * as Yup from "yup";

export const checkoutValidationSchema = Yup.object({
    cellphone: Yup.string().required("Campo requerido"),
    location: Yup.string().required("Campo requerido"),
    adress: Yup.string().required("Campo requerido"),
    zipCode: Yup.string().required("Campo requerido")
});

export const loginValidationSchema = Yup.object({
    email: Yup
            .string()
            .required("Campo requerido")
            .email("Por favor ingresar un email válido"),
    password: Yup
            .string()
            .required("Campo requerido")
            .min(6, "La contraseña debe tener al menos 6 caracteres")
});

export const registerValidationSchema = Yup.object({
    name: Yup.string().required("Campo requerido"),
    email: Yup
            .string()
            .required("Campo requerido")
            .email("Por favor ingresar un email válido"),
    password: Yup
            .string()
            .required("Campo requerido")
            .min(6, "La contraseña debe tener al menos 6 caracteres")
});

export const createItemValidationSchema = Yup.object({
    tittle: Yup.string().required("Campo requerido"),
    category: Yup.string().required("Campo requerido"),
    gender: Yup.string().required("Campo requerido"),
    desc: Yup.string().required("Campo requerido"),
    price: Yup.string().required("Campo requerido"),
    quantity: Yup.string().required("Campo requerido"),
    color: Yup.string().required("Campo requerido"),
    size: Yup.string().required("Campo requerido"),
    image: Yup.string().required("Campo requerido"),
});

export const updateItemValidationSchema = Yup.object({
    image: Yup.string().required("Campo requerido"),
    tittle: Yup.string().required("Campo requerido"),
    newTittle: Yup.string().required("Campo requerido"),
    color: Yup.string().required("Campo requerido"),
    size: Yup.string().required("Campo requerido"),
    desc: Yup.string().required("Campo requerido"),
    price: Yup.string().required("Campo requerido"),
    category: Yup.string().required("Campo requerido"),
});

export const deleteItemValidationSchema = Yup.object({
    tittle: Yup.string().required("Campo requerido")
});