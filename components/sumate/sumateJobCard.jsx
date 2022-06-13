export default function SumateJobCard({position})  {
    return (
        <a href={"/sumate/" + position.uid} className="bg-white px-8 py-4 m-3 flex flex-col border-gray-5' rounded-2xl shadow-lightblue justify-between	">
            <div className="flex flex-nowrap flex-row justify-between">
                <div className="text-xl">{position.name}</div>
                {((position.categories[2].name === "Búsqueda Interna") && (position.categories[2].value === "Si")) && <i className="fas fa-star text-blue-50 -mr-4 ml-2"></i>}
            </div>
            <div className=" cursor-pointer  text-gray-600 ">{position.location.name ? position.location.name : ""} {position.experience_level ? ` - ${position.experience_level}` : ''}</div>
        </a>
    )
}