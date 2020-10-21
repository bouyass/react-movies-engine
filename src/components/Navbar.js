import React, {useState} from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Navbar(props) {

    const [mobileVersion, setMobileVersion] = useState(false)

    window.addEventListener('resize' , function(event){
        console.log(window.innerWidth)
            if(window.innerWidth < 750){
                setMobileVersion(true)
            }else{
                setMobileVersion(false)
            }
    })

    return (
        <nav className="nav-container">
            <h2 id="main-title">Movie Engine</h2>
    <div class="search"> <input className="form-control" value={props.value} type="text" onChange={props.onChange} placeholder="Movie title, actor or keyword"/> {mobileVersion ? <FontAwesomeIcon onClick={props.onClick} id="loop" size="2x" icon={faSearch} /> : <button onClick={props.onClick} type="button" className="btn btn-dark">Search</button>} </div>
        </nav>
    )
}

export default Navbar
