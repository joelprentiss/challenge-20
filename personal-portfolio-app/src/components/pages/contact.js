import React, { useState } from 'react';
import {validateEmail} from '../portfolio';


function Contact(){
  const [email, setEmail] = useState('');
  const [messageSubject, setSubject]= useState('');
  const [messageBody, setBody]= useState('');
  const[errorMessage, setErrorMessage]= useState('');


  const handleInputChange = (e)=>{
    const {target}=e;
    const inputType = target.name
    const inputValue = target.value;
    if (inputType === 'email'){
      setEmail(inputValue);
    } else if (inputType === 'messageSubject'){
      setSubject(inputValue);
    }else {
      setBody(inputValue)
    }
  }
  const handleFormSubmit =(e)=>{
    e.preventDefault();
    if (!validateEmail(email)){
      setErrorMessage('Please enter a valid email')
      return;
    }
    setBody('');
    setEmail('');
    setSubject('');
  };
  return(
    <div>
      <p>Hello! You can use this form to contact me!</p>
      <form className='form' method='POST' action='https://script.google.com/macros/s/AKfycbwwaxTnYYmf7m9ALRjwP7WB1Wu2dfTV66uQjXr_iYOKKstaDzXUUQMGisH17tWJL-2lbw/exec
'>
        <input
        value={email}
        name='Email'
        onChange ={handleInputChange}
        type='email'
        placeholder ='Email'
        />
        <input name="Name" type="text" placeholder="Name" required />
        <input
        value={messageSubject}
        name='messageSubject'
        onChange={handleInputChange}
        type='text'
        placeholder='Message Subject'
        />
        <input
        value={messageBody}
        name='messageBody'
        onChange={handleInputChange}
        type ='text'
        placeholder= 'Message Body'
        />
        <button type='button' onClick={handleFormSubmit}>Send</button>
      </form>
    </div>
  )
}

export default Contact;

{/* <form 
  method="POST" 
  action="YOUR_WEBAPP_URL"
>
  <input name="Email" type="email" placeholder="Email" required>
  <input name="Name" type="text" placeholder="Name" required>
  <button type="submit">Send</button>
</form> */}






// export function Contact() {
//   return (
//     <div>
//       <h1>Contact Page</h1>
//       <p>
//         Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
//         molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
//         magna a ultrices. Aenean pellentesque placerat lacus imperdiet
//         efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
//         mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
//         posuere, eget tristique dui dapibus. Maecenas fermentum elementum
//         faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
//         ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
//         dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
//         conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
//         rhoncus. Etiam vel condimentum magna, quis tempor nulla.
//       </p>
//     </div>
//   );
// }
