function Radio() {
    return (

<div className="campo">
 <label>
     <h2>De qual lado da aplicação você desenvolve?</h2>
     <input type="radio" name="devweb" value="frontend"></input>Front-End
     </label>  

     <label>
         <input type="radio" name="devweb" value="backend"></input>Back-End
         </label> 

        <label>
            <input type="radio" name="devweb" value="fullstack"></input>Full-Stack 
        </label>

    </div>

    )
}

export default Radio