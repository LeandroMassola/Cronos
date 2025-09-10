
export default function modalAlert({onCancel, onConfirm, isOpen}) {
    return (
        <div className="bg-[#eeecdd] p-6 rounded-xl shadow-lg z-50">
        <p className="mb-4 text-lg font-medium">¿Eliminar este cronómetro?</p>
        <div className="flex gap-3 justify-end">
            <button
            onClick={onCancel}
            className="px-4 py-2 rounded-lg cursor-pointer outline-1 outline-[#23596d] bg-[#eeecdd] text-[#23596d] hover:text-[#eeecdd] hover:bg-[#23596d]"
            >
            Cancelar
            </button>
            <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg cursor-pointer bg-[#23596d] text-[#eeecdd] hover:bg-[#ed8772]"
            >
            Eliminar
            </button>
        </div>
        </div>
    );
}