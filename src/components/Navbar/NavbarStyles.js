import { BiShoppingBag, BiUser } from "react-icons/bi";
import styled from "styled-components"

export const NavbarContainerStyled = styled.div`
    height: 150px;
	width: 100%;
	margin: 0 auto;
	padding: 20px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({bgcolor}) => bgcolor ? "transparent" : "#18191a"};
	transition: ease-in;
`;
export const LinksContainerStyled = styled.div`
    margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 50px;
`;
export const LinkContainerStyled = styled.div`
    display: flex;
	color: white;
	&:hover {
        opacity: .9;
	}
	span {
		font-size: .8rem;
	}

	@media (max-width: 780px) {
        display: none;
	}
`;
export const UserContainerStyled = styled.div`
	color: white;
	display: flex;
	align-items: center;
	gap: 5px;

	&:hover {
    	text-decoration: underline;
  	}
	p {
		font-size: .8rem;
		
		@media (max-width: 780px) {
			display: none;
		}
	}
`;
export const LogoStyled = styled.img`
	width: 150px;
	padding: 10px 0;
	margin: 0;
	display: flex;
`;
export const IconsContainerStyled = styled.div`
    position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 15px;
	right: 5%;

	@media (max-width: 780px) {
		flex-direction: column;
		align-items: flex-end;
	}
`;
export const BiUserStyled = styled(BiUser)`
	font-size: 1.5rem;
	cursor: pointer;	

	:hover {
		opacity: .8;
	}
`;
export const BiShoppingBagStyled = styled(BiShoppingBag)`
	font-size: 1.5rem;
	cursor: pointer;	

	:hover {
		opacity: .8;
	}
`;

export const CartIconContainer = styled.div`
    display: flex;
	align-items: end;
	color: white;
	&:hover {
        opacity: .9;
	}
	span {
		font-size: .8rem;
	}
`;

export const MenuIconContainer = styled.div`
	cursor: pointer;
	position: absolute;
	left: 2rem;
	z-index: 99;

	@media (min-width: 780px) {
		display: none;
	}	
`;