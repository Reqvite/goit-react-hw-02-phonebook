import { List, Notification, ListItem, Name } from "./ContactList.style";

export const ContactList = (({filterContacts, contacts}) => {
 
    return (
        <List>
            {contacts.length === 0
                ? <Notification>You don't have contacts.</Notification>
               :filterContacts.length === 0
             ? <Notification>No contacts were found matching your request.</Notification>
              : filterContacts.map(({id, name, number}) => 
                <ListItem key={id}>
                    <Name>
                    {name}:
                </Name>
                    <span>{number}</span>
                </ListItem>    
          )} 
        </List>
    )
})