import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';


class HomeCarousel extends React.Component {

    render(){
        return (
            <div className="carousel">
                <Carousel>
                <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://code.gabriellealexa.com/mutual_aid_1.png"
      alt="Mutual Aid Resources"
    />
    <Carousel.Caption>
    <Jumbotron>
  <h1>What is Mutual Aid?</h1>
  <p>
  Mutual aid projects are a form of political participation in which people take responsibility for caring for one another and changing political conditions.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
</Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://code.gabriellealexa.com/mutual_aid_2.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>More On Mutual Aid</h3>
      <p>Mutual aid participants work together to figure out strategies and resources to meet each others' needs, such as food, housing, medical care, and disaster relief, while organizing themselves against the system that created the shortage in the first place.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://code.gabriellealexa.com/mutual_aid_3.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>More On Mutual Aid:</h3>
      <p>Mutual aid is distinct from charity. Mutual aid projects are often critical of the charity model, and may use the motto "solidarity, not charity" to differentiate themselves from charities..</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
        )
    }
}

export default HomeCarousel;