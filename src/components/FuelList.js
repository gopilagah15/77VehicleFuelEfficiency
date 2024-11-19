import React from "react";

const FuelList = ({ fuelLogs }) => {
    return (
        <div>
            <h2>Fuel Log</h2>
            {fuelLogs.length === 0 ? (
                <p>No fuel logs recorded yet.</p>
            ) : (
                <ul>
                    {fuelLogs.map((log, index) => (
                        <li key={index}>
                            <strong>Mileage:</strong> {log.mileage} <br />
                            <strong>Fuel Added:</strong> {log.fuelAdded}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FuelList;
