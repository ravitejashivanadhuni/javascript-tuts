function TemperatureInput({label, temperature , onTemperatureChange}){
    return (
        <div>
            <label>{label}:</label>
            <input
                type = "number"
                value={temperature}
                onChange={(e) => onTemperatureChange(e.target.value)}
            />
        </div>
    );
}
export default TemperatureInput;