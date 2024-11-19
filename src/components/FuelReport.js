import React from "react";

const FuelReport = ({ fuelLogs }) => {
    const generateTrendReport = () => {
        if (fuelLogs.length < 2) return "Not enough data to generate a trend report.";

        let trends = [];
        for (let i = 1; i < fuelLogs.length; i++) {
            const distance = fuelLogs[i].mileage - fuelLogs[i - 1].mileage;
            const efficiency = distance / fuelLogs[i].fuelAdded;

            trends.push({
                logNumber: i,
                distance,
                efficiency: efficiency.toFixed(2),
            });
        }

        return trends;
    };

    const trends = generateTrendReport();

    return (
        <div style={{ marginTop: "20px" }}>
            <h2>Fuel Consumption Trends</h2>
            {typeof trends === "string" ? (
                <p>{trends}</p>
            ) : (
                <ul>
                    {trends.map((trend, index) => (
                        <li key={index}>
                            <strong>Log {trend.logNumber}:</strong> <br />
                            Distance: {trend.distance} <br />
                            Efficiency: {trend.efficiency} miles/gallon (or km/liter)
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FuelReport;
