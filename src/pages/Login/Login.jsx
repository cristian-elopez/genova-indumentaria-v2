import { 
    Form, 
    LoginContainerStyled, 
    LoginEmailStyled, 
    LoginPasswordStyled 
} from "./LoginStyles"
import { Formik } from "formik"
import { Link } from "react-router-dom"
import Input from "../../components/UI/Input/Input"
import Submit from "../../components/UI/Submit/Submit"
import { loginInitialValues } from "../../formik/initialValues"
import { loginValidationSchema } from "../../formik/validationSchema"
import { loginUser } from "../../axios/user/userActions"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentUser } from "../../redux/user/userSlice"
import { UserActions } from "../../components/UserActions/UserActions"

function Login () {
    const dispatch = useDispatch();
    const {currentUser} = useSelector(state => state.user);
    return (
        <LoginContainerStyled>
            <Formik
                initialValues={loginInitialValues}
                validationSchema={loginValidationSchema}
                onSubmit={async (values) => {

                    const user = await loginUser(values.email,values.password)
                    if (user) {
                        alert(`Bienvenido ${user.user.name}`);
                        dispatch(setCurrentUser({...user.user,token: user.token}))
                    }

                }}
            >
                {
                    currentUser
                    ?
                    <>
                        <UserActions />
                    </> 
                    :
                    <Form>
                        <h1>Iniciar sesión</h1>
                        <div>
                            <Input name="email" type="text" placeholder="Tu email"/>
                            <Input name="password" type="password" placeholder="Tu contraseña"/>
                        </div>
                        <Link to="/">
                            <LoginPasswordStyled>
                                ¿Olvidaste tu contraseña? Reestablecela!
                            </LoginPasswordStyled>
                        </Link>
                        <Link to="/register">
                            <LoginEmailStyled>
                                ¿No tenes cuenta? Crea una!
                            </LoginEmailStyled>
                        </Link>
                        <Submit>Ingresar</Submit>
                    </Form>
                    
                }
            </Formik>
        </LoginContainerStyled>
    )
};

export default Login;