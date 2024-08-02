import { 
    RegisterContainerStyled,
    Form,
    LoginLinkStyled
} from "./RegisterStyles"
import { Formik } from "formik"
import Input from "../../components/UI/Input/Input"
import { Link, useNavigate } from "react-router-dom"
import Submit from "../../components/UI/Submit/Submit"
import { registerInitialValues } from "../../formik/initialValues"
import { registerValidationSchema } from "../../formik/validationSchema"
import { createUser } from "../../axios/user/userActions"

function Register () {
    const navigate = useNavigate();
    return (
        <RegisterContainerStyled>
            <h1>Crea tu cuenta</h1>
            <Formik 
                initialValues={registerInitialValues}
                validationSchema={registerValidationSchema}
                onSubmit={async (values,actions) => {
                    const user = await createUser(
                        values.name,
                        values.email,
                        values.password
                    );
                    actions.resetForm();
                    alert(user.msg);
                    if (user) {
                        navigate("/login");
                    }
                }}
            >
                <Form>
                <div>
                    <Input name="name" type="text" placeholder="Tu nombre"/>
                    <Input name="email" type="text" placeholder="Tu email"/>
                    <Input name="password" type="password" placeholder="Tu contraseña"/>
                </div>
                <Link to="/login">
                    <LoginLinkStyled>
                        ¿Ya tenes cuenta? Inicia sesión
                    </LoginLinkStyled>
                </Link>
                <Submit>Registrarse</Submit>
                </Form>
            </Formik>
        </RegisterContainerStyled>
    )
};

export default Register;