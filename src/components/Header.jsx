import usfLogo from '../assets/usf.png'

const Header = () => {
  return (
    <header className='flex justify-center items-center p-4'>
      <div>
        <img
          className='w-36 h-20'
          src={usfLogo}
          alt="USF Logo"
        />
      </div>
      <div className="text-white m-4 font-bold text-lg md:text-2xl lg:text-3xl">
        Student Unmanned Aerial Systems
      </div>
    </header>
  )
}

export default Header