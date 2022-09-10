import React from 'react'
import Back from '../common/back/Back'
import './contact.css'

const Contact = () => {
    const map = ' https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14447.66604638609!2d55.880200699999996!3d25.1385133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sae!4v1662657170024!5m2!1sen!2sae" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade ' 
   return (
    <>
    <Back title='Contact us'/>
    <section className='contact padding'>
        <div className="container shadow flexSB">
            <div className="left row">
                <iframe src={map}  ></iframe>
            </div>
            <div className="right row">
                <h1>Contact Us</h1>
                <p>Lorem ipsum dolor eos deleniti facere laborum exercitationem.</p>
                <div className="items grid2">
                    <div className="box">
                        <h4>ADDRESS:</h4>
                        <p>Building no: 5, Sheikh Zayd Road, Dubai </p>
                    </div>
                    <div className="box">
                        <h4>Email:</h4>
                        <p>info@gmail.com</p>
                    </div>
                    <div className="box">
                        <h4>Phone No</h4>
                        <p>i+971 02589328</p>
                    </div>
                </div>
                <form action=''>
                    <div className="flexSB">
                        <input type="text" placeholder='Name'/>
                        <input type="email" placeholder='Email'/>
                    </div>
                    <input type="text" placeholder='Subject'/>
                    <textarea cols='30' rows='10'>
                        Create a message here...
                    </textarea>
                    <button className='primary-btn'>SEND MESSAGE</button>
                </form>
                <h3>Follow us here</h3>
                <span>Facebook Instagram Twitter</span>
            </div>
        </div>


    </section>
    </>
  )
}

export default Contact