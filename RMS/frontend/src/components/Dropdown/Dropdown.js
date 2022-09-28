import React from "react"; 

const Dropdown=()=>{

    const [selectedCountry, setSelectedCountry] = React.useState();
    const [selectedState, setSelectedState] = React.useState();
    const [selectedCity, setSelectedCity] = React.useState();

    useEffect(function ()  {
      axios.get("http://localhost:3003/countries")
      .then((response)=>setSelectedCountry(response.data)
      .then((error)=>console.log(error)));
    }, []);
  

    const availableState = data.countries.find((c) => c.name === selectedCountry);
    const availableCities = availableState?.states?.find(
      (s) => s.name === selectedState
    );
  
    return (
        <div id="container">
          <h2>Cascading or Dependent Dropdown using React</h2>
    
          <div>
            <label>Country</label>
            <select
              placeholder="Country"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option>--Choose Country--</option>
              {data.countries.map((value, key) => {
                return (
                  <option value={value.name} key={key}>
                    {value.name}
                  </option>
                );
              })}
            </select>
          </div>
    
          <div>
            <label>State</label>
            <select
              placeholder="State"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              <option>--Choose State--</option>
              {availableState?.states.map((e, key) => {
                return (
                  <option value={e.name} key={key}>
                    {e.name}
                  </option>
                );
              })}
            </select>
          </div>
    
          <div>
            <label>City</label>
            <select
              placeholder="City"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option>--Choose City--</option>
              {availableCities?.cities.map((e, key) => {
                return (
                  <option value={e.name} key={key}>
                    {e}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      );

};
export default Dropdown;
