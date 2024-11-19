import React, { useState } from "react";

const FuelForm = ({ addFuelLog }) => {
    const [mileage, setMileage] = useState("");
    const [fuelAdded, setFuelAdded] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!mileage || !fuelAdded) {
            alert("Please fill all fields!");
            return;
        }

        const newLog = {
            mileage: parseFloat(mileage),
            fuelAdded: parseFloat(fuelAdded),
        };

        addFuelLog(newLog);
        setMileage("");
        setFuelAdded("");
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <input
                type="number"
                placeholder="Mileage (miles/kilometers)"
                value={mileage}
                onChange={(e) => setMileage(e.target.value)}
            />
            <input
                type="number"
                placeholder="Fuel Added (gallons/liters)"
                value={fuelAdded}
                onChange={(e) => setFuelAdded(e.target.value)}
            />
            <button type="submit">Add Log</button>
        </form>
    );
};

export default FuelForm;
