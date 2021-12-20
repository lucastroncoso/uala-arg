import Dropdown from '../../components/dropdown';
import CheckboxSelector from '../checkboxSelector';

export default function PromotionFilters({
    categories,
    selectedCategory,
    setSelectedCategory,
    locations,
    selectedLocation,
    setSelectedLocation,
    showNewest,
    setShowNewest
}) {
    

    return (
        <div className="grid grid-cols-3 space-x-4 mx-4">
            <div className="rounded-xl shadow-lightblue p-2 pl-4 pb-4">
                <Dropdown 
                    key="categoria" 
                    slug="categoria" 
                    name="Seleccionar categoría" 
                    items={ categories } 
                    selectedValue={ selectedCategory } 
                    setSelectedValue={ setSelectedCategory }
                />
            </div>
            <div className="rounded-xl shadow-lightblue p-2 pl-4 pb-4">
                <Dropdown 
                    key="ubicaciones" 
                    slug="ubicaciones" 
                    name="Seleccionar ubicación" 
                    items={ locations } 
                    selectedValue={ selectedLocation }
                    setSelectedValue={ setSelectedLocation }
                />
            </div>
            <div className="rounded-xl shadow-lightblue p-2 flex flex-col justify-center">
                <CheckboxSelector
                    value="show-newest"
                    label="Nuevos beneficios"
                    labelPlacement="start"
                    selected={ showNewest }
                    setSelected={ setShowNewest }
                />
            </div>
        </div>
    )
}