
import HomePageGraphic from "@/assets/f.jpg";

type Props = {}

const Index = (props: Props) => {
return (
    <div className='h-screen flex items-center justify-center'>
        <form className='bg-white flex rounded-lg w-1/2'>
            <div className='flex-1 text-gray-700'>
                <h1 className=' text-3xl pb-2 font-pacifico'>Register to become a member</h1>
                <p className='text-lg text-gray-500'>Register today with royal pallets and enjoy quite a good discount on all your purchased products</p>
                <div className='mt-6'>
                {/**Name Input Field */}
                    <div className='pb-4'>
                        <label className='block text-sm pb-2'
                        htmlFor='name'
                        >
                            Name
                        </label>
                        <input 
                        className='border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-900 focus:ring-teal-500'
                        type='text'
                        name='name'
                        placeholder='Enter your Name'
                        />
                    </div>
                    <div className='pb-4'>
                        {/**Email Input Field */}
                        <label className='block text-sm pb-2'
                        htmlFor='email'
                        >
                            Email
                        </label>
                        <input 
                        className='border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-900 focus:ring-teal-500'
                        type='email'
                        name='email'
                        placeholder='Enter your Email'
                        />
                    </div>
                    <div className='pb-4'>
                        {/**Gender Input Field */}
                        <label className='block text-sm pb-2'
                        htmlFor='gender'
                        >
                            Gender
                        </label>
                        <select name='gender' className='border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-900 focus:ring-teal-500'>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Prefer not to say</option>
                        </select> 
                    </div>
                    <div className='pb-4'>
                        {/**Terms of service */}
                        <label className='block text-sm pb-2'
                        htmlFor='terms'
                        >
                            Terms of Service
                        </label>
                        <div className='flex items-center gap-2 '>
                            <input 
                            type='checkbox'
                            name='terms'
                            value='checked'
                            className='h-5 w-5 text-gray-500 border-2 focus:border-gray-500 focus:ring-gray-900'
                            />
                            <p className='text-sm text-gray-700'>I agree to the terms and services that my data will be taken and sold</p>
                        </div>
                    </div> 
                    <button type='submit' className='bg-gray-500  font-pacifico text-sm text-white py-3 mt-6 rounded-lg w-full'>Register </button>   
                </div>
            </div>
            <div className='relative flex-1 fill' >
                <img src= {HomePageGraphic} className='h-full object-cover rounded-lg' />
            </div>
        
        </form>
    </div>
)
}

export default Index