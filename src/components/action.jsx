import bga from '../assets/Group 7157.png'
import ActionInto from './miniComponents/actionInto'

const Action = () => {
  return (
    <div style={{ backgroundImage: `url(${bga})` }} className="h-[120vh] bg-cover bg-center relative">
        <ActionInto/>
    </div>
  )
}

export default Action