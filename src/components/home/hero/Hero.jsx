 import React from 'react'
 import   "./hero.css"
 import Title from '../../common/title/Title'

 
 const hero = () => {
   return (
     <>
     <section className='hero'>
        <div className="container">
            
            <div className="row">
            <Title subtitle='WELCOME TO EDUCOURSE' title='Best Online Education'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure obcaecati, unde, aliquam eum quos illum maiores soluta totam dignissimos ut recusandae porro ad delectus vitae reiciendis est eligendi laudantium necessitatibus?</p>
            <div className="button">
                <button className='primary-btn'>GET STARTED NOW
                <i className='fa fa-long-arrow-alt-right'></i>
                </button>
                <button  >VIEW COURSE
                <i className='fa fa-long-arrow-alt-right'></i>
                </button>
            </div>
            </div>
        </div>

     </section>
     <div className="marigin">

     </div>
     </>
   )
 }
 
 export default hero