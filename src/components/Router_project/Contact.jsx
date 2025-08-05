import { Form } from 'react-router-dom';
import './Contact.css';

export const contactData=async({request})=>{
try {
    const resp = await request.formData();
    const data = Object.fromEntries(resp);
    console.log(data)
    return null
} catch (error) {
    console.log(error)
}
}

export const Contact=()=>{
    return(
        <>
        <Form method='POST' action='/contact'>
        <div className="background">
  <div className="container">
    <div className="screen">
      <div className="screen-header">
        <div className="screen-header-left">
          <div className="screen-header-button close"></div>
          <div className="screen-header-button maximize"></div>
          <div className="screen-header-button minimize"></div>
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
        </div>
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div className="app-contact">CONTACT INFO : +62 81 314 928 595</div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input className="app-form-control"
              type='text'
              name='username'id='username' autoComplete='off'
              placeholder="NAME" required/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control"type='email' name='email'id='email'autoComplete='off' placeholder="EMAIL" required/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control"type='tel' name='number'id='number'autoComplete='off' placeholder="CONTACT NO"/>
            </div>
            <div className="app-form-group message">
              <input className="app-form-control"type='text' name='message'id='message'autoComplete='off' placeholder="MESSAGE"/>
            </div>
            <div className="app-form-group buttons">
              <button className="app-form-button">CANCEL</button>
              <button className="app-form-button">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</Form>
        </>
    )
}