function CheckBox() {
    return (
            <fieldset className="grupo">
                <div id="check">
                <label><h2>Selecione as tecnologias que você utiliza:</h2> </label> <br></br>

                    <input type="checkbox" id="tecnologia1" name="tecnologia1" value="HTML"></input>
                    <label for="tecnologia1">HTML </label>
                    <input type="checkbox" id="tecnologia2" name="tecnologia2" value="CSS"></input>
                    <label for="tecnologia2">CSS </label>
                    <input type="checkbox" id="tecnologia3" name="tecnologia3" value="Javascript"></input>
                    <label for="tecnologia3">JavaScript </label>
                    <input type="checkbox" id="tecnologia4" name="tecnologia4" value="PHP"></input>
                    <label for="tecnologia4">PHP </label>
                    <input type="checkbox" id="tecnologia5" name="tecnologia5" value="C#"></input>
                    <label for="tecnologia5">C# </label>
                    <input type="checkbox" id="tecnologia6" name="tecnologia6" value="Python"></input>
                    <label for="tecnologia6">Python </label>
                    <input type="checkbox" id="tecnologia7" name="tecnologia7" value="Java"></input>
                    <label for="tecnologia7"></label>
                </div>
            </fieldset>
    )
}

export default CheckBox