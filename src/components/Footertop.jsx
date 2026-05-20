
import location from '../assets/Screenshot2_13 1 2.png'
import FooterBottom from './miniComponents/footerBottom'
const Footertop = () => {
  return (
    <div >
<img src={location} alt=""  className='w-full h-screen object-cover lg:object-fill'/>
<FooterBottom/>
    </div>
  )
}

export default Footertop