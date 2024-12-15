export default function Footer() {
    return <>
    

<footer className="bg-blue-200  dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="  text-[27px] text-gray-500 sm:text-center dark:text-gray-400 flex flex-col py-8">LOCATION<a href="" className="hover:underline text-[17px]">2215 John Daniel Drive</a><a className="text-[17px]">Clark, MO 65243.</a>
    </span>
    <div>
        <h2 className="text-[30px] text-gray-500 sm:text-center dark:text-gray-400 ">AROUND THE WEB </h2>
      <div className="flex space-x-16 text-gray-500 text-[18px] mt-4 ">
        <i className="fa-brands fa-facebook-f border border-white rounded-full p-2 bg-transparen"></i>
        <i className="fa-brands fa-twitter border border-white rounded-full p-2 bg-transparen"></i>
        <i className="fa-brands fa-linkedin border border-white rounded-full p-2 bg-transparen"></i>
        <i className="fa-solid fa-globe border border-white rounded-full p-2 bg-transparen"></i>
      </div>
        
    </div>
    <div>
        <span className="text-[30px] text-gray-500 sm:text-center dark:text-gray-400 flex flex-col">ABOUT FREELANCER <a className="text-[17px]">Freelance is a free to use, licensed Bootstrap theme</a><a className="text-[17px]">created by Route</a></span>
    </div>
    </div>
</footer>
<footer className="bg-blue-50 dark:bg-gray-900">
    <div className="w-full max-w-screen-xl mx-auto  md:py-8">
    <span className="block text-[15px] text-gray-500 sm:text-center dark:text-gray-400">Copyright<a className="hover:underline"> ©</a>Your Website 2021</span>
    </div>
</footer>
    </>
}