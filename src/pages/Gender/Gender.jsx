import { CardsProducts } from "../../components/Products/CardsProducts"
import { GenderContainerStyles } from "./GenderStyles"
import { Categories } from "../../components/Categories/Categories";

function Gender (route) {
    return (
        <GenderContainerStyles>
            <Categories/>
            <CardsProducts gender={route.route}/>
        </GenderContainerStyles>
    )
};

export default Gender;