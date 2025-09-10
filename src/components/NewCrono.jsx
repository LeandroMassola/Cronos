
export default function NewCrono({/* setIsClicked */addCrono, setInputValue, inputValue, inputError, setInputError}) {

    /* function toggleIsClicked(e) {
        e.preventDefault()
        setIsClicked(true)
    } */

        

    function getValueChange(e) {
        setInputValue(e.target.value)
        setInputError('')
    }

    return (
        <div className='mb-5 w-full flex justify-center p-5 sm:pl-10 sm:pt-10 sm:justify-normal sm:min-h-6 sm:items-center md:min-h-4 md:items-start lg:items-start lg:justify-center lg:pl-5'>
            <form onSubmit={addCrono} className='flex flex-col lg:grid lg:grid-rows-[1fr_2fr_2fr] lg:gap-2'>
                <input className='text-center bg-white rounded-md p-5 outline-0 outline-[#eeecdd] lg:py-0 lg:text-md lg:transition lg:delay-0 lg:duration-1000 lg:focus:outline-2 lg:focus:outline-[#eeecdd] lg:hover:shadow-lg lg:shadow-[#eeecdd]' onChange={getValueChange} value={inputValue} type="text" placeholder='Ingrese un nombre' />
                <button className='font-bold p-2 my-8 border-2 rounded-md text-[#1d3a6d] cursor-pointer lg:hover:bg-[#eeecdd] lg:hover:text-[#ed8772] lg:hover:transition-colors duration-750' type='submit'>Nuevo Cronómetro</button>
                <p className={`${inputError? 'visible' : 'hidden'}  text-[#f0caa4] font-bold w-50 lg:`}>{inputError}</p> 

            </form>
        </div>
    )
}

/* bg-gradient-to-r from-[#ed8772] to-[#f0caa4] */