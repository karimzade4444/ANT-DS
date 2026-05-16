import bg from '../assets/Group 7159.png'
import MiddleTopInto from './miniComponents/middleTopInto'

const MiddleTop = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}
          className="h-screen bg-cover bg-center">
            <MiddleTopInto/>
          </div>
  )
}

export default MiddleTop