import Dropdown from './sumateDropdown';

export default function SumateFilters({
    categories,
    selectedDepartment,
    setSelectedDepartment,
    selectedSeniority,
    setSelectedSeniority,
    seniority

}) {


    return (
        <div className="grid grid-cols-2 space-x-4 mx-4">
            <div className="rounded-xl shadow-lightblue p-2 pl-4 pb-4">
                <Dropdown
                    key="Departamento"
                    slug="departamento"
                    name="Seleccionar departamento"
                    items={categories}
                    selectedValue={selectedDepartment}
                    setSelectedValue={setSelectedDepartment}
                />
            </div>
            <div className="rounded-xl shadow-lightblue p-2 pl-4 pb-4">
                <Dropdown
                    key="Seniority"
                    slug="Seniority"
                    name="Seleccionar seniority"
                    items={seniority}
                    selectedValue={selectedSeniority}
                    setSelectedValue={setSelectedSeniority}
                />
            </div>
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