function Form() {

    return (
      <form>
          <fieldset className="grupo">
              <div className="campo">
                  <label for="nome">Nome</label>
                  <input type="text" name="nome" id="nome" required ></input>

              </div>

            <div className="campo">
                <label for="sobrenome">Sobrenome</label>
                <input type="text" nome="sobrenome" id="sobrenome" required ></input>
            </div>

          </fieldset>
          <div className="campo">
              <label for="email">Email</label>
              <input type="email" nome="email" id="email" required ></input>
          </div>

      </form>
    )

}

export default Form