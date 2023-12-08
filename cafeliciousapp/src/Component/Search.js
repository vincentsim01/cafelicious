import React,{useState,useEffect} from 'react';
// import './Search.css';

const baseUrl = "http://localhost:9120"

const Search = () => {

    const [title] = useState(' Cafe Collections');
    const [location,setLocation] = useState([]);
    const [restaurant,setRestaurant] = useState([]);
    
    console.log(baseUrl);

    useEffect(() => {
        fetch(`${baseUrl}/location`,{method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {
            setLocation(data);

        })
    },[])

    const renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option key={item.state_id} value={item.state_id}>
                        {item.state}
                    </option>
                )
            })
        }
    }





 
    return(
        <div id="search">
           <div className="logo">
               <span><div id="zomatologocontainer"><img id="zomatologo" src="https://i.ibb.co/8rFhHTz/download.jpg"></img></div></span>
           </div>

           <div id="heading">
              {title}
           </div>
           <div className="dropdown">
                <select>
                   <option>-----SELECT YOUR CITY-----</option>
                   {renderCity(location)}
                </select>
                <select>
                    <option>-----SELECT YOUR RESTAURANTS-----</option>
                </select>
           </div>
        </div>
    )
}

export default Search;
