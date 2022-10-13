import { FormStyled, Label, Input, Button } from "./ContactForm.style";

import { Formik } from "formik";

export const ContactForm = (({ name, contacts }) => {
const handleSubmit = (values, actions) => {
            console.log(values);
    console.log(actions);
    console.log(contacts);
    }
    return (
    <Formik  initialValues={{ name }} onSubmit={handleSubmit}>
   <FormStyled>
 <Label htmlFor="name">Name
   <Input
  type="text"
   name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required                    
        />
      </Label>
    <Button type='submit'>Add contact</Button>
    </FormStyled>
    </Formik>
    )
})


   
     
   