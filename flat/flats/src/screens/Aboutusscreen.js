import React from 'react'

function Aboutusscreen() {
  return (
    <div className="container">
    <header>
      <h4  className='text-center bs' style={{fontSize:'50px'}}>About Us</h4>
      <hr className="t_border my-4 ml-0 text-left" />
    </header>
    <main>
      <section>
        <p>Welcome to our flat rental system! Our mission is to provide a comfortable and hassle-free living experience for our tenants. We understand that finding a suitable place to call home can be challenging, which is why we strive to make the process as easy as possible.</p>
      </section>
      <section>
        <h2>Why Choose Us?</h2>
        <ul>
          <li><strong>Convenient and Affordable:</strong> We understand that safety is a top concern for our guests, and we take it seriously. Our properties are equipped with security systems and are located in safe neighborhoods.</li>
          <li><strong>Flexible Lease Options:</strong> We want our guests to feel comfortable during their stay, which is why we provide clean and well-maintained accommodations with all the necessary amenities.</li>
          <li><strong>Excellent Customer Service::</strong> We believe that everyone should have access to quality accommodation, which is why we offer our services at an affordable price.</li>
        </ul>
      </section>
    </main>
  </div>
  )
}

export default Aboutusscreen