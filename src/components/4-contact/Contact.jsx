import React from 'react'
import './contact.css'
export default function Contact() {
  return (
    <section className='contact-us'>
      <h1 className='title'>
        <span className='icon-email'></span>
        Contact Us
      </h1>
      <p className='sub-title'>
        Contact us for more information about our products and services, and get notified about our latest news and updates.
      </p>

      <div className="flex">
        <form className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="" id="email" />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message: </label>
            <textarea required name="" id="message" ></textarea>
          </div>

          <button className='submit'>Submit</button>
        </form>
        <div className="cadr animation"> animation</div>
      </div>






    </section>
  )
}
