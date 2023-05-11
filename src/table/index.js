import './index.css'
// array = [{name:'sudhakar',age:25,mobile:1286361623,email:'sgwugiugqu@gmail.com'},
// {name:'sudhakar',age:25,mobile:1286361623,email:'sgwugiugqu@gmail.com'},
// {name:'sudhakar',age:25,mobile:1286361623,email:'sgwugiugqu@gmail.com'}]
const Table = () => {
 
console.log('Table render')    
let array = [];
let localArray = localStorage.getItem('array')
if (localArray !== null){
    array = JSON.parse(localArray)
}

    return <table bgcolor="gold" cellPadding= '5' cellSpacing= '5'>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Mobile</th>
            <th>Email</th>
        </tr>
        {array.map(obj => 
            <tr>
                <td>{obj.name}</td>
                <td>{obj.age}</td>
                <td>{obj.mobile}</td>
                <td>{obj.email}</td>
            </tr>
        )}

    </table> 
    
    
}
export default Table