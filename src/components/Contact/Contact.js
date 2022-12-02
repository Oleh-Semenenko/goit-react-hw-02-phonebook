import { ContactItem, Text, DeleteBtn } from './Contact.styled';

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <ContactItem>
      <Text>{name}:</Text>
      <Text>{number}</Text>
      <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </DeleteBtn>
    </ContactItem>
  );
};

export default Contact;
