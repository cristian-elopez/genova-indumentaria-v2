import styled from "styled-components";

export const MenuContainer = styled.div`
    background-color: #18191a;
    position: absolute;
    top: 150px;
    z-index: 9;
    transition: ease-in;
    width: 100%;
    height: 40%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    ul {
		list-style: none;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;

		li {
			margin: 20px 0;
            cursor: pointer;
		}
	}
`;