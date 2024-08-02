import { useDispatch, useSelector } from "react-redux"
import { CardCategoria, CardImg } from "./CategoriesStyles"
import { selectCategory } from "../../redux/categories/categoriesSlice"

export const Category = ({id,img,tittle,category}) => {
    const {selectedCategory} = useSelector(state => state.categories);
    const dispatch = useDispatch();
    return (
        <CardCategoria 
            selected={ 
                category === "todo" ?
                selectedCategory === null :
                selectedCategory === category 
            }
            onClick={ ()=> dispatch(selectCategory(category)) }
        >
            <CardImg src={img} alt={tittle}/>
            <h3>{tittle}</h3>
        </CardCategoria>
    )
};