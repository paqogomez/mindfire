import React from 'react';

class Earthquakes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    render() {
        if (this.state.items.length === 0) {
            return (
                <h1>loading...</h1>
            )
        }
        else {
            return (
                <div>
                <ul className="earthquakes">
                    {this.renderLocations(this.state.items)}
                </ul>
                </div>
            );
        }
    }

    renderLocations(locations) {        
        return (
            locations.features.map((f, i) => 
            <li className="location" key={i}>
                <div className="locationTime" key={i}>{Intl.DateTimeFormat().format(f.properties.time)}</div>
                <a href={f.properties.url}>                
                    {f.properties.place}
                </a>
            </li>)
        );
    }

    renderData(lat, long){        
        var url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minmagnitude=2.0&longitude=${long}&latitude=${lat}&maxradius=2`
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    // alert('loaded: ' + result.tasks[0].string)
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {
            this.renderData(position.coords.latitude, position.coords.longitude)
        });
    }
}
export default Earthquakes;