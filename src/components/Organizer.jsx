import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class Organizer extends React.Component {

    handleAddOrganizer = (addOrganizer) => {
        fetch("http://localhost:3000/starred_organizers", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: "application/json"
          },
          body: JSON.stringify({
            starred_organizer: {
                user_id: 1,
                organizer_id: addOrganizer.id
            }
          })
        }).then(resp => resp.json())
        .then(newSR => {
            console.log(newSR)
            console.log("Success! Added to Hub.")
        })
       }

    render(){
        return(
            <div className="organizer">
                <Card style={{ width: '100%', height: '100%' }}>
                     <Card.Img variant="top" src={this.props.organizer.img} />
                    <Card.Body>
                     <Card.Title><a href={this.props.organizer.website}>{ this.props.organizer.title }</a></Card.Title>
                    <Card.Text>
                    { this.props.organizer.about }
                     </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                     <Button onClick={() => this.handleAddOrganizer(this.props.organizer)} variant="primary">Add to Starred Organizers</Button>
                     </Card.Footer>
                    </Card>
                </div>
        )
    }
} export default Organizer;