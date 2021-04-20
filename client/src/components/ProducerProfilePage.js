import React, {Component} from 'react';
import '../styles/ProducerProfile.css';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ProducerProfilePage extends Component{
  /////TODO: make this get information from database



    static defaultProps = {
        center: {lat: -80.733726, lng: 35.308076},
        zoom: 12
    }

    constructor(props){


        super(props);
        this.state = {
            producer:{
                image: "https://media.istockphoto.com/photos/farmer-in-a-soybean-field-agricultural-concept-picture-id1158664559?k=6&m=1158664559&s=612x612&w=0&h=gKaS2VdqyJZKAJMFTOZDZC72oVYFwXt7PqcDdqcfCSw=",
                name: "Perdu Farms",
                description: "Since 2015, Perdu Farms has been committed to growing organic produce. Our mission is to build community through education, food accessibility, and by being a model of appropriate land stewardship and sustainable agriculture techniques.",
                location: "University City South, Charlotte, NC 28262",
                longitude: 35.308076,
                latitude: -80.733726,
            }


        };

    }

/////BUG: Label doesn't show 
    render() {

        return(

                <div>
            <div>
            <h1 className="produce4U-producerWelcome">Know<span className="produce4U-blacktext"> Your Farmer</span></h1>
             <h2 className="produce4U-producerWelcome"> Love<span className="produce4U-blacktext"> Your Food</span><br></br></h2>
            </div>



         <div className="producer-info">
                <img className="produce4U-producerPhoto" src={this.state.producer.image}/>
                <p className="produce4U-producerName">{this.state.producer.name} <br></br><br></br><span className="produce4U-producerText">{this.state.producer.description}</span></p>
         </div>
                  <div className="location-info">
                        <p className= "produce4U-producerLocation"> Location</p>
                        <p className="produce4U-locationText">{this.state.producer.name} is located at {this.state.producer.location}</p>
                        <div style={{ height: '600px', width: '90%', margin:"auto"}}>
                          <GoogleMapReact
                              bootstrapURLKeys={{key:'AIzaSyDiAVMs1DJpi5C8bkFHY2WZ6DTDq7K0pU0', language: 'en', region: 'US'}}
                              defaultCenter={this.props.center}
                              defaultZoom={this.props.zoom}
                              onChildMouseEnter={this.onChildMouseEnter}
                              onChildMouseLeave={this.onChildMouseLeave}
>
                           <AnyReactComponent
                                 lat={this.state.producer.latitude}
                                 lng={this.state.producer.longitude}
                                 text={this.state.producer.name}
                             />
                          </GoogleMapReact>



                          </div>

                    </div>


                </div>






        );
    }


}


export default ProducerProfilePage;