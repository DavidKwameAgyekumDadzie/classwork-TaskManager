function Form () {
    return (
        <div className="h-screen bg-gradient-to-br from-fuchsia-400 to-peach-500 to-red-300 flex justify-center items-center ">
            <div className="max-w-2xl w-full bg-white p-10 ">
            <form >
        {/* Creating a form */}
        <div >

        <div>

        <label className="form-label" htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" />
        </div>
        <div>

        <label className="form-label" htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" />
        </div>
        <div>

        <label className="form-label" htmlFor="middleName">Middle Name</label>
        <input type="text" name="middleName" id="middleName" />
        </div>
        </div>

        <div>
            <label htmlFor="male">
            <input type="radio" name="gender" value="male" id="male"/> Male
            </label>
        </div>

        <div>
            <label htmlFor="female">
            <input type="radio" name="gender" value="female" id="female"/> Female
            </label>
        </div>

        <div>
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input type="date"  />
        </div>

        <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" placeholder="xxx-xxx-xxxx" />
        </div>

        <div>
            <label htmlFor="email">Email</label>
            <input type="email"
            name="email" 
            id="email"
            placeholder="john.doe@email.com"
            />
        </div>
        <div>
            <button  type="submit">Register</button>
        </div>

            </form>
            </div>
            

        </div>
   );

}
export default Form;