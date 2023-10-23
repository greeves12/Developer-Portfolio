import Avatar from "../Assets/Avatar";

const Home = () => {
    return(
        <div className='bg-primary/60 h-full'>

            {/* Heading, text and button */}
            <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
                <div className="flex flex-col text-center pt-44 xl:pt-40 xl:text-left h-full container mx-auto">
                    <h1 className=' text-6xl font-semibold'>Design. <span className='text-yellow-500'>Innovate.</span> <span className='text-red-600'>Create.</span></h1>
                    <p className='text-gray-400 max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 pt-12 text-xl'>This is a test.</p>
                </div>

                {/* Button */}

                <div>
                    
                </div>
            </div>
                {/* Image container */}
                <div className='w-[1120px] h-full absolute bottom-0 right-3 '>
                    {/* Render galaxy background */}
                    <div className='absolute bg-none xl:bg-galaxy mix-blend-lighten w-full h-full max-h-[800px] bg-cover bg-no-repeat brightness-75
                    bottom-10' /> 
                    
                    {/* Render avatar */}
                    <div className="w-full h-full max-w-[737px] max-h-[678px] absolute bottom-0 lg:right-[8%]">
                        <Avatar />
                    </div>
            </div>
        </div>
    );
}

export default Home;