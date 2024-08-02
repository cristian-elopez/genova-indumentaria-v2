import { useSelector } from "react-redux"
import { CategoriasContainer } from "./CategoriesStyles"
import { Category } from "./Category"

export const Categories = () => {
    const {categories} = useSelector(state => state.categories)
    return (
        <CategoriasContainer>
            {
                categories.map(cat => <Category key={cat.id} {...cat}/>)
            }
        </CategoriasContainer>
    )
}