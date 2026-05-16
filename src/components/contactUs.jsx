import cu from '../assets/DSC08022 1.png'

const ContactUs = () => {
  return (
     <div style={{ backgroundImage: `url(${cu})` }} className="h-screen bg-cover bg-center relative"
            >
              <p className=" absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-5xl   text-center">
                Contact us
              </p>
            </div>
  )
}

export default ContactUs