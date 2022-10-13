import { Component } from "react";
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme/theme';
import { nanoid } from "nanoid";

import { Container } from "./Container/Container";
import { MainTitle } from './Titles/MainTitle/MainTitle'
import { ContactForm } from "./ContactForm/ContactForm";
import { SecondaryTitle } from "./Titles/SecondaryTitle/SecondaryTitle";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export class App extends Component{
  state = {
  contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    name: '',
    number: '',
    filter: '',
  }
  
  handleSubmit = (values, { resetForm }) => {
   console.log(values);
    this.addNewContact(values)
       resetForm()
  }

  handleFilter = (e) => {
    console.log(e.target.value);
    this.setState({filter: e.currentTarget.value})
  }

  addNewContact = (values) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    }
    
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts]
    }  
    ))


  }

  render() {
    const {name,number, filter, contacts} = this.state
    return <ThemeProvider theme={theme}>
      <Container display="flex" flexDirection="column" alignItems="center" padding="3">
        <MainTitle title='Phonebook' />
        <ContactForm name={name} number={number} getData={this.handleSubmit}/>
        <SecondaryTitle title='Contacts' />
        <Filter title='Find contacts by name' value={filter} contacts={contacts} handleFilter={this.handleFilter} />
        <ContactList contacts={contacts}/>
      </Container>
      </ThemeProvider>
  }
}

