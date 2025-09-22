import { Heart } from 'lucide-react'


export default function DocumentCard({ressource}) {
   

  return (
    <div className='border-1 border-primary w-full sm:w-[47%] md:w-[31%] xl:w-[23%] px-4 py-5 rounded-lg shadow-lg hover:shadow-xl hover:scale-101 hover:border-2 transition duration-300'>
       <div className='flex items-start justify-between'>
          <div>
            <h2 className="font-bold text-3xl " > {ressource.subject}</h2>
            <div className='text-md'>
                {ressource.title}  
            </div>
          </div>
          <button>
              <Heart />
          </button>  
       </div>
       <div className='mt-3 flex flex-wrap gap-2'>
            <span className='bg-red-800 px-4 py-1 rounded-xl text-sm '>{ressource.level} </span>
            <span className='bg-green-600 px-4 py-1 rounded-xl text-sm'>{ressource.class} </span>
            <span className='bg-yellow-500 px-4 py-1 rounded-xl text-sm'>{ressource.type} </span>
       </div>
    </div>
  )
}
