import { List, ListItem, Name } from "./ContactList.style";

export const ContactList = (({contacts}) => {
    
    return (
        <List>
            {contacts.map((contact => 
                <ListItem key={contact.id}>
                    <Name>
                    {contact.name}:
                </Name>
                    <span>{contact.number}</span>
                </ListItem>    
          ))} 
        </List>
    )
})