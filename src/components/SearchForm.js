import { useState } from "react";

const SearchForm = ({ getUser }) =>{
    const[value,setValue] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!value){
            alert("Please Enter Github username")
            return
        };
        getUser(value)
        setValue("")
    }
    return(
    <div className="form-container">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input 
                 type="text" 
                 className="form-control" 
                 placeholder="Search Github username..."
                 value={value} 
                 onChange={e=>setValue(e.target.value)} 
                />
            </div>
            <input 
             type="submit" 
             className="btn"
             value="search" />
        </form>
    </div>
    );
}

export default SearchForm