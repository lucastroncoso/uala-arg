import { useEffect } from 'react';
import Dropdown from '../../components/dropdown';

export default function PromotionFilters({
    categories,
    selectedCategory,
    setSelectedCategory,
    locations,
    selectedLocation,
    setSelectedLocation
}) {
    

    return (
        <div className="grid grid-cols-3 space-x-4 mx-4">
            <div className="rounded shadow-lightblue p-2">
                <Dropdown 
                    key="categoria" 
                    slug="categoria" 
                    name="Seleccionar categoría" 
                    items={ categories } 
                    selectedValue={ selectedCategory } 
                    setSelectedValue={ setSelectedCategory }
                />
            </div>
            <div className="rounded shadow-lightblue p-2">
                <Dropdown 
                    key="ubicaciones" 
                    slug="ubicaciones" 
                    name="Seleccionar ubicación" 
                    items={ locations } 
                    selectedValue={ selectedLocation }
                    setSelectedValue={ setSelectedLocation }
                />
            </div>
            <div className="rounded shadow-lightblue p-2">
            test
            </div>
        </div>
    )
}