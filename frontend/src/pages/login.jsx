import React from 'react'
import Template from '../components/core/auth/Template'

const Login = () => {
  return (
    <>
    <div>
      <section className="services" id="services">
        <h3 class="heading">Please select<span> your account type!</span> </h3>
        <div class="box-container">
          <div class="box">
            <img src="../images/60.jpg" alt="Customer icon"/>
            <h3>Login as a Customer</h3>
            <a href="/" class="btn">Login as a Customer</a>
          </div>
          <div class="box">
            <img src="../images/60.jpg" alt="Majdoor icon"/>
            <h3>Login as a Majdoor</h3>
            <a href="/majdoor-login" class="btn">Login as a Majdoor</a>
          </div>
          <div class="box">
            <img src="../images/admin1.jpg" alt="Thekedar icon"/>
            <h3>Login as an Thekedar</h3>
            <a href="/" class="btn">Login as an Thekedar</a>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Login
