import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Resource extends React.Component {

    handleAddResource = (addResource) => {
        fetch("http://localhost:3000/starred_resources", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: "application/json"
          },
          body: JSON.stringify({
            starred_resource: {
                user_id: 1,
                resource_id: addResource.id
            }
          })
        }).then(resp => resp.json())
        .then(newSR => {
            console.log(newSR)
          console.log("Success! Added to Hub.")
        })
       }


    render(){

        return (
                <div className="resource-card">
                    <Card style={{ width: '100%', height: '100%' }}>
                     <Card.Img variant="top" src={this.props.resource.img} />
                    <Card.Body>
                     <Card.Title><a href={this.props.resource.link}>{ this.props.resource.title }</a></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"><b>Category:</b> { this.props.resource.needs.map(need => {
                return need.title
            })}</Card.Subtitle>
                    <Card.Text>
                    { this.props.resource.details }
                    <br />
            <p> <b>Organized by:</b> {this.props.resource.organizers.map(organizer => {
                return  organizer.title
                }) } </p>
                     </Card.Text>
                     </Card.Body>
                     <Card.Footer>
                         <Button onClick={() => this.handleAddResource(this.props.resource)} variant="primary">Add to Starred Resources</Button>
                   </Card.Footer>
                    </Card>
            </div>
        )
    }
} export default Resource;