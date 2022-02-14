import Dropdown from './sumateDropdown';

export default function SumateFilters({
    categories,
    selectedCategory,
    setSelectedDepartment,
    locations,
    selectedLocation,
    setSelectedLocation,
    showNewest,
    setShowNewest
}) {


    return (
        <div className="grid grid-cols-2 space-x-4 mx-4">
            <div className="rounded-xl shadow-lightblue p-2 pl-4 pb-4">
                <Dropdown
                    key="Departamento"
                    slug="departamento"
                    name="Seleccionar departamento"
                    items={categories}
                    selectedValue={selectedCategory}
                    setSelectedValue={setSelectedDepartment}
                />
            </div>
            {/* <div className="rounded-xl shadow-lightblue p-2 pl-4 pb-4">
                <Dropdown
                    key="ubicaciones"
                    slug="ubicaciones"
                    name="Seleccionar ubicación"
                    items={locations}
                    selectedValue={selectedLocation}
                    setSelectedValue={setSelectedLocation}
                />
            </div> */}
            {/* Se oculta temporalmente para first deploy
            <div className="rounded-xl shadow-lightblue p-2 flex flex-col justify-center">
                <CheckboxSelector
                    value="show-newest"
                    label="Nuevos beneficios"
                    labelPlacement="start"
                    selected={ showNewest }
                    setSelected={ setShowNewest }
                />
            </div> */}
        </div>
    )
}