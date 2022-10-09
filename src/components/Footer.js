import './Footer.css'
import twitter from '../images/icon-twitter.svg'
import instagram from '../images/icon-instagram.svg'
import facebook from '../images/icon-facebook.svg'
import pinterest from '../images/icon-pinterest.svg'



export default function Footer() {
  return (
    <div className='Footer'>
        <h2>sunnyside</h2>
        <div className="footer__container">
            <ul>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
            </ul>
        </div>
        <div class="icon">
          <img src={facebook} alt="twitter" />
          <img src={instagram} alt="twitter" />
          <img src={twitter} alt="twitter" />
          <img src={pinterest} alt="twitter" />
        </div>
    </div>
  )
}
