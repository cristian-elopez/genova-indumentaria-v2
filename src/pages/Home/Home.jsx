import { Link } from 'react-router-dom';
import { 
    GenderGeneralWrapper, 
    GenderWrapper, 
    HomeWrapper, 
    RecomendedWrapper 
} from './HomeStyles'

function Home () {
    return (
        <HomeWrapper>
            <GenderGeneralWrapper>
                <GenderWrapper>
                    <Link to='/gender/women'>
                        <img 
                            src="https://res.cloudinary.com/dja0b7qbo/image/upload/v1682437172/PROYECTOS/GENOVA/MODELS/modelo-genova-mujer_iaiwtf.jpg" 
                            alt="Modelo Mujer" 
                        />
                        <h3>MUJER</h3>
                    </Link>
                </GenderWrapper>
                <GenderWrapper>
                    <Link to='/gender/men'>
                        <img 
                            src="https://res.cloudinary.com/dja0b7qbo/image/upload/v1682436293/PROYECTOS/GENOVA/MODELS/modelo-genova-hombre_ounwyb.jpg" 
                            alt="Modelo Hombre" 
                        />
                        <h3>HOMBRE</h3>
                    </Link>
                </GenderWrapper>
            </GenderGeneralWrapper>
        </HomeWrapper>
    )
}

export default Home;