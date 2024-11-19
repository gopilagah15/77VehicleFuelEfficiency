import React from "react";

const EfficiencyCalculator = ({ fuelLogs }) => {
    const calculateEfficiency = () => {
        if (fuelLogs.length < 2) return 0;

        let totalDistance = 0;
        let totalFuel = 0;

        for (let i = 1; i < fuelLogs.length; i++) {
            totalDistance += fuelLogs[i].mileage - fuelLogs[i - 1].mileage;
            totalFuel += fuelLogs[i].fuelAdded;
        }

        return totalFuel === 0 ? 0 : (totalDistance / totalFuel).toFixed(2);
    };

    const efficiency = calculateEfficiency();

    return (
        <div style={{ marginTop: "20px" }}>
            <h2>Average Fuel Efficiency</h2>
            <p>
                {efficiency > 0
                    ? `Your average fuel efficiency is ${efficiency} miles per gallon (or kilometers per liter).`
                    : "Log at least two fuel fill-ups to calculate efficiency."}
            </p>
        </div>
    );
};

export default EfficiencyCalculator;
