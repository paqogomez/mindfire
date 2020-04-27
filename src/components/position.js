import React from 'react';
import Earthquakes from './earthquakes';

class Position extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null
        };
    }
    
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => 
            this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }, 
        newState => console.log(this.state.longitude + "new state")), 
        err => console.log(err));        
    }

    render(){
        var long = this.state.longitude;
        var lat = this.state.latitude;
        console.log(long, lat);
        return(
            <div className="coordinates">
                <div className="lat">
                    {lat}
                </div>
                <div className="long">
                    {long}
                </div>
                <Earthquakes longitude={long} latitude={lat}></Earthquakes>
            </div>
        )
    }
}
export default Position;