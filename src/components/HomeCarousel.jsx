import React from 'react';
import Image from 'react-bootstrap/Image';


class HomeCarousel extends React.Component {

    render(){
        return (
            <div className="carousel">
                <Image src="http://code.gabriellealexa.com/mutual_aid_1.png" />
             
                 <div className="left"> <h4>a web application for users to learn about and participate in mutual aid efforts.</h4></div>
                 <div className="right"><br /><small>(c) Gabrielle Alexa Noel, 2020</small></div>
            </div>
        )
    }
}

export default HomeCarousel;