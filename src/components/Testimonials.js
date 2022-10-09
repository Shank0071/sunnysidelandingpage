import './Testimonials.css'
import emily from '../images/image-emily.jpg'
import jennie from '../images/image-jennie.jpg'
import thomas from '../images/image-thomas.jpg'


export default function Testimonials() {
  return (
    <div className='Testimonials'>
        <h1>Client Testimonials</h1>
        <div className='container'>
            <div className="container1">
                <img src={emily} alt="emi" />
                <p>We put our trust in Sunnyside and they delivered, 
                   making sure our needs were met and deadlines were always hit.</p>
                <div>
                  <h3>Emily R.</h3> 
                  <small>Marketing Director</small>
                </div>
                 
            </div>
            <div className="container2">
                <img src={jennie} alt="emi" />
                <p>Sunnyside’s enthusiasm coupled with their keen interest 
                    in our brand’s success made it a satisfying and enjoyable experience.</p> 
                <div>
                  <h3>Thomas S.</h3>
                  <small>Chief Operating Officer</small>
                </div>
                
            </div>
            <div className="container3">
                <img src={thomas} alt="emi" />
                <p>Incredible end result! Our sales increased over 
                    400% when we worked with Sunnyside. Highly recommended! </p> 
                <div>
                  <h3>Jennie F.</h3>
                  <small>Business Owner</small>
                </div>
                
            </div>
        </div>
    </div>
  )
}
