import { FilterTitle, FilterInput } from "./Filter.styled"
export const Filter = (({title, value, contacts, handleFilter}) => {
   
    const normilizeFilter = value.toLowerCase();

    const filterContacts = contacts
        .map(contact => contact)
        .filter(contact => contact.name.toLowerCase().includes('ros'))
        

        console.log(filterContacts);
    return (
        <>
        <FilterTitle>{title}</FilterTitle>
        <FilterInput type="text" onChange={handleFilter}/>
        </>
    )
})