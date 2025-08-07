
import underConstruction from '../assets/underconstruction.svg'
import './UnderConstruction.css'

function UnderConstruction() {

  return (
    <>
      <div>
          <a href="https://github.com/jorgeluna93" target="_blank">
          <img src={underConstruction} className="logo react" alt="Under construction sign" />
        </a>
      </div>
      <h1>Under construction...</h1>
      <div className="card">
          <p>This is going to be Personal Blog, showing some code I've been working with, talking about tech, personal experiences and opinions about IT world. </p>
          <p>For now I'm just doing some testing stuff, figuring out how to deploy react on GitHub pages and added the custom domain!</p>
          <p>In the meantime, why don't you take a look at my stuff?:</p>
          <ul>
            <li><a href="https://github.com/jorgeluna93">Visit my Github page </a></li>
            <li><a href="https://linkedin.com/in/jluna93mty/">Visit my Linkedin </a></li>
          </ul>
      </div>
      <p className="read-the-docs">
        Jorge Luna's Dev Site
      </p>
    </>
  )
}

export default UnderConstruction
