import './MainBody.css'
import egg from '../images/desktop/image-transform.jpg'
import glass from '../images/desktop/image-stand-out.jpg'
import cherry from '../images/desktop/image-graphic-design.jpg'
import orange from '../images/desktop/image-photography.jpg'

export default function MainBody() {
  return (
    <div className='MainBody'>
        <div className="container container1">
            <h1>Transform Your Brand</h1>
            <p>We are creatives Transform your brand We are a full-service creative agency specializing in helping brands grow fast.
                 Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <h4>LEARN MORE</h4>
        </div>
        <div className="container container2" style={{backgroundImage: `url(${egg})`}}></div>
        <div className="container container3" style={{backgroundImage: `url(${glass})`}}></div>
        <div className="container container4">
            <h1>Stand out to the right audience</h1>
            <p>We are creatives Transform your brand We are a full-service creative agency specializing in helping brands grow fast.
                 Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <h4>LEARN MORE</h4>
        </div>
        <div className="container container5" style={{backgroundImage: `url(${cherry})`}}>
          <div>
            <h1>Graphic Design</h1>
            <p>Great design makes you memorable. 
              We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
          </div>
        </div>
        <div className="container container6" style={{backgroundImage: `url(${orange})`}}>
          <div>
            <h1>Photography</h1>
            <p>Increase your credibility by getting the most stunning, 
              high-quality photos that improve your business image.</p>
          </div>
        </div>
    </div>
  )
}
