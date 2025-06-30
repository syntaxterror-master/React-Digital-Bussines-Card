
export default function Main() {
  return (
    <main>
      <div className="wrapper">
        <div className="about-me-container">
          <h1>Laura Smith</h1>
          <p>Frontend Developer</p>
          <span>laurasmith.website</span>
        </div>
          <div className="btns-container">
            <a className="btn email-btn" href="#"><i className="fa-solid fa-envelope"></i>Email</a>
            <a className="btn linkedin-btn" href="#"><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
          </div>
          <div className="inner-container">
              <div className="about-container">
                <h3>About</h3>
                <p>I am a frontend developer with a particular interest 
                  in making things simple and automating daily tasks.
                   I try to keep up with security and best practices, 
                   and am always looking for new things to learn.</p>
              </div>
              <div className="interests-container">
                  <h3>Interests</h3>
                  <p>Food expert. Music scholar. Reader. Internet fanatic.
                    Bacon buff. Entrepreneur. Travel geek. Pop culture ninja.
                      Coffee fanatic.</p>
              </div>
          </div>
      </div>
    </main>
  )
}