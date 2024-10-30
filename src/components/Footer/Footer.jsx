import { Link } from "react-router-dom";
import {
  ColumnsContein,
  FooterColumnsContainer,
  FooterContainerStyled,
  InfoCopyrigthStyled,
  LinkContainerStyled,
  LogoStyled,
  TittleColumnFotter,
} from "./FooterStyles";

export const Footer = () => {
  return (
    <FooterContainerStyled>
      <FooterColumnsContainer>
        <ColumnsContein>
          <TittleColumnFotter> PREGUNTAS FRECUENTES </TittleColumnFotter>
          <Link to="/help">
            <LinkContainerStyled>
              {" "}
              ¿Como realizar un pedido?{" "}
            </LinkContainerStyled>
          </Link>
          <Link to="/help">
            <LinkContainerStyled> Envio </LinkContainerStyled>
          </Link>
          <Link to="/help">
            <LinkContainerStyled> Cambios </LinkContainerStyled>
          </Link>
        </ColumnsContein>
        <ColumnsContein>
          <TittleColumnFotter> CONTACTANOS </TittleColumnFotter>
          <LogoStyled
            src="https://res.cloudinary.com/dja0b7qbo/image/upload/v1682357016/PROYECTOS/GENOVA/IMAGES/genova-icon-white"
            alt="Genova logo"
          />
        </ColumnsContein>
      </FooterColumnsContainer>
      <InfoCopyrigthStyled>
        © 2024 Génova Indumentaria. Todos los derechos reservados - Diseñada
        por <strong>Cristian Lopez</strong>
      </InfoCopyrigthStyled>
    </FooterContainerStyled>
  );
};
