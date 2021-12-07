import { useState } from "react";
import Container from "./container";
import Slider from '@mui/material/Slider';





export default function Calculator(props) {
    const [calculator, setCalculator] = useState({ cuotas: 24, value: 0, result: 0 })

    const handleCuotaChange = function (e) {
        console.log(calculator)
        let { value, result } = calculator
        setCalculator({ ...calculator, cuotas: Number(e), result: Number(value) / e })
    }

    const handleValueChange = function (e) {
        if (e.type === "touchmove") {
            let newValue = Math.round(e.target.value * calculator.cuotas)
            setCalculator({ ...calculator, value: newValue, result: e.target.value })

        } else {
            let newResult = Math.round(e.target.value / calculator.cuotas)
            setCalculator({ ...calculator, result: newResult, value: e.target.value })
        }
    }


    return (
        <Container className={props.bg + " my-24"}>
            <div className="w-6/12 mx-auto text-white text-center py-24">
                <h2 className="title-2 mb-8">Simulá tu préstamo</h2>
                <h3 className="subtitle-2 mb-8">Completá la simulación y podrás conocer cuánto podés pedir para tu préstamo.</h3>

                <label className="text-lg" htmlFor="monto">Monto a solicitar</label>
                <input placeholder="$500"
                    className="text-center w-9/12 mb-8 mt-4 text-4xl placeholder-white border-b-white border-b block mx-auto bg-transparent outline-none"
                    type="text" name="monto" id="" onChange={handleValueChange} value={calculator.value !== 0 ? calculator.value : ""} />

                <label className="text-lg" htmlFor="monto">Cantidad de cuotas</label>
                <div className="flex pt-4 w-9/12 mx-auto justify-center border-white border-b pb-8 mb-8 ">
                    <button onClick={() => handleCuotaChange(6)} className={calculator.cuotas === 6 ? "outline-none px-2 text-2xl bg-white rounded-full text-blue-250 mx-4" : "px-4 mx-4 text-2xl outline-none"}> 6</button>
                    <button onClick={() => handleCuotaChange(12)} className={calculator.cuotas === 12 ? "outline-none px-2 text-2xl bg-white rounded-full text-blue-250 mx-4" : "px-4 mx-4 text-2xl outline-none"}> 12</button>
                    <button onClick={() => handleCuotaChange(18)} className={calculator.cuotas === 18 ? "outline-none px-2 text-2xl bg-white rounded-full text-blue-250 mx-4" : "px-4 mx-4 text-2xl outline-none"}> 18</button>
                    <button onClick={() => handleCuotaChange(24)} className={calculator.cuotas === 24 ? "outline-none px-2 text-2xl bg-white rounded-full text-blue-250 mx-4" : "px-4 mx-4 text-2xl outline-none"}> 24</button>

                </div>

                <label className="text-lg" htmlFor="monto">Cuotas fijas de</label>
                <div className="text-4xl" id="result">{calculator.value !== "0" ? "$" + Math.round(calculator.result * 100) / 100 : ""}</div>

                {/* <Slider
                    defaultValue={100}
                    sx={{
                        width: 300,
                        color: 'white',
                    }}
                    max={2000}
                    onChange={() => handleValueChange}
                // value={Math.round(calculator.result)}
                /> */}
            </div>
        </Container>
    );
}
