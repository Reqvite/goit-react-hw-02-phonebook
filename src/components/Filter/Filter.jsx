import { FilterTitle, FilterInput } from "./Filter.styled"
export const Filter = (({title,handleFilter}) => {
   
    return (
        <>
        <FilterTitle>{title}</FilterTitle>
        <FilterInput type="text" onChange={handleFilter}/>
        </>
    )
})