import React from 'react'
import './Contact.css'
function Contact({setName}) {
  const addName = (event) => {
    event.preventDefault();
    let mail = event.target.uemail.value;
    setName(mail);

  }
  return (
    <div>
    <div id='User_Form'>
      <h2>User Login Form</h2>
          <form onSubmit={addName}>
            <table>
              <tr>
                <td><h3>User Name</h3></td>
                <td><input type="text"  name='uname' placeholder='Enter User Name Here'/></td>
              </tr>
              <tr>
                <td><h3>User Number</h3></td>
                <td><input type="number" name='unumber' placeholder='Enter User Number here'/></td>
              </tr>
              <tr>
                <td><h3>User Email</h3></td>
                <td><input type="email" name='uemail' placeholder='Enter your Email here'/></td>
              </tr>
              <tr>
                <td><input type="submit" name="" id="Form_Button" /></td>
              </tr>
            </table>
          </form>
        </div></div>
  )
}

export default Contact