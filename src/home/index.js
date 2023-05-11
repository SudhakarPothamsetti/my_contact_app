import { useState } from 'react'
import Form from '../form'
import Table from '../table'
import './index.css'
const HomeScreen = () => {
    
    console.log('home render')
    // localStorage.clear()
    const [state,stateChanger] = useState(false)
    return(
    <div className = 'bg-home' >
        <h1 className="head">Contact App </h1>
        <div className='home-card'>
            <Form state = {state} stateChanger = {stateChanger} />
            <Table />
        </div>
    </div>)
}
export default HomeScreen