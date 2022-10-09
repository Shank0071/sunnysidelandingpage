import './ComponentImage.css'
import cone from '../images/desktop/image-gallery-cone.jpg'
import milkbottle from '../images/desktop/image-gallery-milkbottles.jpg'
import orange from '../images/desktop/image-gallery-orange.jpg'
import sugarcubes from '../images/desktop/image-gallery-sugarcubes.jpg'


export default function ComponentImage() {
  return (
    <div className='ComponentImage'>
        <div className="container">
            <img src={milkbottle} alt="cone" />
        </div>
        <div className="container">
            <img src={orange} alt="milkbottles" />
        </div>
        <div className="container">
            <img src={cone} alt="orange" />
        </div>
        <div className="container">
            <img src={sugarcubes} alt="sugarcubes" />
        </div>
    </div>
  )
}
