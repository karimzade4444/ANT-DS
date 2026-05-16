import bgs from '../assets/Group 7156.png'
import ServicesInto from './miniComponents/servicesInto'

const Services = () => {
  return (
    <div style={{backgroundImage:`url(${bgs})`}} className='bg-center bg-cover h-[180vh]'>
    <ServicesInto/>
    </div>
  )
}

export default Services