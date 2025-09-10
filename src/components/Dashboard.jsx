import Crono from "./Crono"
import { useState } from "react"


export default function Dashboard({cronometers, onClose, setCronometers, isModalOpen, setIsModalOpen, handleDelete}) {

    
    return (
        <div className={`${isModalOpen ? 'blur-md' : 'flex flex-col'} sm:w-full sm:pt-10 md:grid md:grid-cols-2 md:gap-1.5 md:px-0.5`}>
            
            {cronometers.length > 0 ? cronometers.map((cronometer, index) => (
            <Crono handleDelete={handleDelete} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} onClose={onClose} cronometer={cronometer} setCronometers={setCronometers} names={cronometer.name} index={index} id={cronometer.id} key={cronometer.id} />
            )) : '' }
        </div>
    )
}