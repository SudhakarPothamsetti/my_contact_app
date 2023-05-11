import "./index.css"

const Form = props => {
    
    console.log('form render')
    let array = [];
    let localArray = localStorage.getItem('array')
    if (localArray !== null){
        array = JSON.parse(localArray)
    }

    let {stateChanger} = props;

    // localStorage.clear()
    const formSubmit = event => {
        event.preventDefault();
        
        const object = {
            name:document.getElementById('name').value,
            age:document.getElementById('age').value,
            mobile:document.getElementById('mobile').value,
            email:document.getElementById('email').value
            }
        
        array.push(object)
        localStorage.setItem('array',JSON.stringify(array))
        stateChanger(true)
        // window.location.reload()


    }

return < form className="form" onSubmit={formSubmit}>
    <div className="input-cont">
        <label>Name</label>
        <input id="name" type="string" placeholder="Enter Name"/>
    </div>
    <div className="input-cont">
        <label>Age</label>
        <input id="age" type="integer" placeholder="Enter Age"/>
    </div>
    <div className="input-cont">
        <label>Mobile</label>
        <input id="mobile" type="string" placeholder="Mobile Number"/>
    </div>
    <div className="input-cont">
        <label>Email</label>
        <input id="email" type="email" placeholder="Enter Email"/>
    </div>
    
    <div className="button-cont">
        <button type="submit" className="button" >Submit</button>
    </div>
</form>}

export default Form