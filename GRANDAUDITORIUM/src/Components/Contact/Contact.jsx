import {useState,useEffect}from 'react'
import './Contact.css'
import axios from 'axios'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import adrs_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import '../Backend/Data'
const Contact = () => {


  // form states
  const [name, setName]=useState('');
  const [phone, setPhone]=useState('');
  const [email, setEmail]=useState('');
  const [message, setMessage]=useState('');


  // retrived data state
  const [data, setData]=useState([]);

  // submit event
  const handleSubmit= (e)=>{
    e.preventDefault();
    

    // console.log(name, age, designation, salary);

    // our object to pass
    const data = {
      name,phone,email,message
    }
    axios.post('https://sheet.best/api/sheets/174e507e-1019-48fb-a743-79688b5f66d1',data).then(response=>{
      console.log(response);
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    })
  }

  // getting data function
  const getData=()=>{
    axios.get('https://sheet.best/api/sheets/174e507e-1019-48fb-a743-79688b5f66d1').then((response)=>{
      setData(response.data);
    })
  }

  // triggering function
  useEffect(()=>{
    getData();
  },[data])

  

  return (
    <div className='contact' id='contact'>
        <div className="contact-col">
            <h3>CONTACT<br/>US </h3>
            <p>To reserve the Grand Auditorium for your upcoming event, 
                simply complete the form provided.One of our executives 
                will contact you with in 24 hours .</p>
                <ul>
                    <li><img src={mail_icon} alt="" />contact@fayazpajju.dev</li>
                    <li><img src={phone_icon} alt="" />12345678-0</li>
                    <li><img src={adrs_icon} alt="" />hafagaha-haaa,kerala<br/> Ma 90990,india</li>
                </ul>
        </div>
        <div className="contact-col">
        <form 
      onSubmit={handleSubmit}>
                <label>YourName</label>
                <input type='text' name='name' placeholder='ENTER YOUR NAME' 
                required onChange={(e)=>setName(e.target.value)}
                value={name}/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='ENTER YOUR MOBILE NUMBER' 
                required onChange={(e)=>setPhone(e.target.value)}
                value={phone}/>
                <label>Email</label>
                <input type='MAIL' name='EMAIL' placeholder='ENTER YOUR EMAIL' 
                required onChange={(e)=>setEmail(e.target.value)}
                value={email}/>
                <label>Write your Messages however</label>
                <textarea name='message' rows="6" placeholder='ENTER YOUR MESSAGE'
                required onChange={(e)=>setMessage(e.target.value)}
                value={message}></textarea>

                <button type='submit' className='btn dark-btn'>SEND <img src={white_arrow} alt="" /></button>
            </form>
        </div>
    </div>
  )
}

export default Contact