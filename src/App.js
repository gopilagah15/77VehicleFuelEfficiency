import React, { useState } from "react"; 
import FuelForm from "./components/FuelForm";
import FuelList from "./components/FuelList";
import EfficiencyCalculator from "./components/EfficiencyCalculator";
import FuelReport from "./components/FuelReport";

const App = () => {
    const [fuelLogs, setFuelLogs] = useState([]);

    const addFuelLog = (newLog) => {
        setFuelLogs([...fuelLogs, newLog]);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Vehicle Fuel Efficiency Tracker</h1>
            <FuelForm addFuelLog={addFuelLog} />
            <FuelList fuelLogs={fuelLogs} />
            <EfficiencyCalculator fuelLogs={fuelLogs} />
            <FuelReport fuelLogs={fuelLogs} />
        </div>
    );
};

export default App;
