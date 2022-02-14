function Nivel() {
    return (
        <div className="campo">

            <label for="senioridade">Senioridade: </label>

            <select id="senioridade">
                <option selected disabled value="">Selecione</option>
                <option>Junior</option>
                <option>Pleno</option>
                <option>Senior</option>
            </select>

        </div>
    ) 
}

export default Nivel