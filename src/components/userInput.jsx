/* eslint-disable react/prop-types */

export default function UserInput({onChange,userInput}){







    return (

        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="Fill the Box"> Initial Investment</label>
                
                    <input type="number" name="initial" id="Initial" required value={userInput.initialInvestment} onChange={(e)=> onChange('initialInvestment',e.target.value)}/>


                </p>
                <p>
                    <label htmlFor="Fill the Box"> Annual Investment</label>
                
                    <input type="number" name="initial" id="Initial" required value={userInput.annualInvestment} onChange={(e)=> onChange('annualInvestment',e.target.value)}/>


                </p>
                <p>
                    <label htmlFor="Fill the Box"> Expected Return </label>
                
                    <input type="number" name="initial" id="Initial" required value={userInput.expectedReturn} onChange={(e)=> onChange('expectedReturn',e.target.value)}/>


                </p>
                <p>
                    <label htmlFor="Fill the Box"> Duration </label>
                
                    <input type="number" name="initial" id="Initial" required value={userInput.duration} onChange={(e)=> onChange('duration',e.target.value)}/>


                </p>
            </div>
        </section>
    )
}