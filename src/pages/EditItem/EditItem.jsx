import { Formik } from "formik"
import Submit from "../../components/UI/Submit/Submit"
import Input from "../../components/UI/Input/Input"
import { createItemInitialValues,updateItemInitialValues,deleteItemInitialValues } from "../../formik/initialValues"
import { createItemValidationSchema,updateItemValidationSchema,deleteItemValidationSchema } from "../../formik/validationSchema"
import { createItem, deleteItem, updateItem } from "../../axios/products/productsActions"
import { 
    EditItemContainer, 
    Form, 
    ImageContainer, 
    InfoContainer,
    SubmitContainer, 
} from "./EditItemStyles"
import { useSelector } from "react-redux"

function EditItem (action) {
    let chosenAction = action.action;
    let itemInitialValues;
    let itemValidationSchema;

    if (chosenAction === "create") {
        chosenAction = "Crear";
        itemInitialValues = createItemInitialValues;
        itemValidationSchema = createItemValidationSchema;
    } else if (chosenAction === "update") {
        chosenAction = "Actualizar";
        itemInitialValues = updateItemInitialValues;
        itemValidationSchema = updateItemValidationSchema;
    } else if (chosenAction === "delete") {
        chosenAction = "Eliminar";
        itemInitialValues = deleteItemInitialValues;
        itemValidationSchema = deleteItemValidationSchema;
    }

    const {currentUser} = useSelector(state => state.user)
    return (
        <EditItemContainer>
            <Formik
                initialValues={itemInitialValues}
                validationSchema={itemValidationSchema}
                onSubmit={async (values,actions) => {
                    try {
                        let item;
                        if (chosenAction === "Crear") {
                            item = await createItem(values,currentUser.token)
                        } else if (chosenAction === "Actualizar") {
                            item = await updateItem(values,currentUser.token);
                        } else if (chosenAction === "Eliminar") {
                            item = await deleteItem(values,currentUser.token);
                        }
                        actions.resetForm();
                    } catch (error) {
                        console.log(error);
                        alert(`Hubo un error al ${chosenAction} el item`)
                    }
                }}>
                    <Form>
                        <ImageContainer>
                            {
                                chosenAction !== "Eliminar"
                                ?
                                    <Input name="image" type="text" placeholder="URL de una imagen">
                                        Imagen
                                    </Input>
                                :   <></>

                            }
                        </ImageContainer>
                        <InfoContainer>
                            <Input name="tittle" type="text" placeholder="Ej. Campera roja">
                                Titulo
                            </Input>
                            {
                                chosenAction === "Actualizar"
                                ?
                                    <Input name="newTittle" type="text" placeholder="Ej. Nueva Campera roja">
                                        Nuevo titulo
                                    </Input>
                                :   <></>
                            }
                            {
                                chosenAction !== "Eliminar"
                                ?
                                    <>
                                        <Input name="category" type="text" placeholder="Ej. Buzo, Campera, Remera">
                                            Categoria
                                        </Input>
                                        <Input name="gender" type="text" placeholder="Masculino o femenino">
                                            Género
                                        </Input>
                                        <Input name="desc" type="text" placeholder="Ingrese una descripción">
                                            Descripcion
                                        </Input>
                                        <Input name="price" type="text" placeholder="Ingrese el precio">
                                            Precio
                                        </Input>
                                        <Input name="quantity" type="text" placeholder="Ingrese la cantidad">
                                            Cantidad
                                        </Input>
                                        <Input name="color" type="text" placeholder="Ingrese el color">
                                            Color
                                        </Input>
                                        <Input name="size" type="text" placeholder="Ej. xs, s, m, l, xl, xxl">
                                            Talle
                                        </Input>
                                    </>
                                :   <></>
                            }
                            <SubmitContainer>
                                <Submit>{chosenAction}</Submit>
                            </SubmitContainer>
                        </InfoContainer>
                    </Form>
            </Formik>
        </EditItemContainer>
    )
};

export default EditItem;