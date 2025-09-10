import { useEffect, useRef, useState } from "react"
import { PiPlayBold } from "react-icons/pi";
import { PiPauseBold } from "react-icons/pi";
import { PiStopBold } from "react-icons/pi";
import { GrPowerReset } from "react-icons/gr";
import { MdClose } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

import Alert from '../components/Alert'


export default function Crono({cronometer, setCronometers, onClose, index, isModalOpen, setIsModalOpen, handleDelete}) {

    
    const [isHide, setIsHide] = useState(false)
    const [isShow, setIsShow] = useState(true)
    const intervalRef = useRef(null)

    useEffect(()=>{
        
        if(cronometer.isRunning) {
            intervalRef.current = setInterval(()=>{
                setCronometers((prevTime)=> 
                prevTime.map((currentCrono=>
                    currentCrono.id == cronometer.id ? {...currentCrono, elapsed: currentCrono.elapsed + 1} : currentCrono
                )))
            }, 1000)
        } else if(intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }

        return () => {
            if(intervalRef.current) clearInterval(intervalRef.current)
        }
    }, [cronometer.isRunning])


    

    /* useEffect(()=> {
        const storedTime = JSON.parse(localStorage.getItem('storedTime'))
        setElapsed(storedTime.elapsed)
    },[]) */


    /* useEffect(()=> {
        localStorage.setItem('storedTime', JSON.stringify({
            id: id,
            lastStart: setLastStart(lastStart),
            elapsed: elapsed,
            isRunning: isRunning
        }))
    },[elapsed, isRunning, lastStart]) */



    function hideViewCrono() {
        setIsShow(false)
        setIsHide(true)
    }

    function showViewCrono() {
        setIsHide(false)
        setIsShow(true)
    }


    function playCrono() {
        setCronometers((prevCrono)=> 
            prevCrono.map((currentCrono)=>
                currentCrono.id == cronometer.id ? {...currentCrono, isRunning: true, lastStart: Date.now()} : currentCrono
            )
        )
    }

    function pauseCrono() {
        setCronometers((prevCrono)=> 
            prevCrono.map((currentCrono)=>
                currentCrono.id == cronometer.id ? {...currentCrono, isRunning: false} : currentCrono
            )
        )
    }

    function stopCrono() {
        setCronometers((prevCrono)=> 
            prevCrono.map((currentCrono)=>
                currentCrono.id == cronometer.id ? {...currentCrono, isRunning: false, elapsed: 0 } : currentCrono
            )
        )
    }

    /* const colors = [
        "bg-rose-100",   // rosado pastel
        "bg-yellow-100", // amarillo suave
        "bg-green-100",  // verde menta claro
        "bg-sky-100",    // celeste claro
        "bg-purple-100", // lila suave
        "bg-orange-100",
    ] */

        const colors = [
        "bg-[#1d3a6d]",   // rosado pastel
        "bg-[#4aa0c4]", // amarillo suave
        "bg-[#7bb7d1]",  // verde menta claro
        "bg-[#a4c9df]",  // verde menta claro
        
    ]

    const borderColors = [
        "border-[#1d3a6d]",   // rosado pastel
        "border-[#4aa0c4]", // amarillo suave
        "border-[#7bb7d1]",  // verde menta claro
        "border-[#a4c9df]"
    ]

function formatTime (totalSeconds) {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0')
    const minutes = String(Math.floor(totalSeconds % 3600 / 60)).padStart(2, '0')
    const seconds = String(totalSeconds % 60).padStart(2, '0')

    return `${hours}:${minutes}:${seconds}`
}

/*     ${colors[index % colors.length]} ${borderColors[index % borderColors.length-1]}
 */
    return (
        <div className='flex flex-col items-center'>
            <div className={`bg-[#eeecdd] shadow-xl shadow-[#eeecdd]/40 border-none w-[95%] mb-20 flex flex-col items-center rounded-2xl py-6 ${isModalOpen?'blur-sm' : ''} md:w-full md:py-2.5`}>
                
                <div className='flex justify-between items-center w-full mb-10'>
                    <h3 className='ml-4 font-bold text-[1.5rem] p-1 px-1.5 text-[#23596d] w-[50%] md:text-[1.3rem]'>{cronometer.name}</h3>
                    <button onClick={()=>handleDelete(cronometer.id)} className='btn-close-box'><MdClose className='btn-close' /></button>
                </div>
                <div className='h-15'>
                    <p className={`${cronometer.isRunning? 'p-2 ring-4 rounded-md ring-[#6096BA] motion-safe:animate-pulse' : ''} font-bold text-3xl tracking-widest text-[#1d3a6d]`}>{formatTime(cronometer.elapsed)}</p>
                </div>
                <button className={` right-38 top-50 ${isShow?'block':'hidden'} cursor-pointer`} onClick={hideViewCrono}><RiArrowDropUpLine className='size-10'/></button>
                <button className={`right-38 top-50 ${isHide ? 'block':'hidden'} cursor-pointer`} onClick={showViewCrono}><RiArrowDropDownLine className='size-10'/></button>
                <div className={`gap-4 mt-10 ${isHide? 'hidden':'flex'} md:gap-0.5`}>
                    <button className='btns-box' onClick={playCrono}><PiPlayBold className='btns'/></button>
                    <button className='btns-box' onClick={pauseCrono}><PiPauseBold className='btns'/></button>
                    <button className='btns-box' onClick={stopCrono}><PiStopBold className='btns'/></button>
                    <button className='btns-box' type='reset'><GrPowerReset className='btns' /></button>
                </div>

            </div>
        </div>
        
    )
}