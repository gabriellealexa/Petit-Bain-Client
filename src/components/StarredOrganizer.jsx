import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class StarredOrganizer extends React.Component {

    constructor(){
        super()
        this.state = {
            starredOrganizers: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/starred_organizers')
        .then(resp => resp.json())
        .then(so => {
            so.map(organizer => {
                if (organizer.user_id === this.props.user.id) {
                    this.setState({
                        starredOrganizers: [organizer, ...this.state.starredOrganizers]
                    })
                }
            })
        })
    }

    handleRemoveItem = (id) => {
        let removeOnDom = document.getElementById(`${id}`);
        this.state.starredOrganizers.map(so => {
            if (so.organizer_id === id) {
                fetch(`http://localhost:3000/starred_organizers/${so.id}`, {
                    method: 'DELETE'
                })
            }
        }) 
        removeOnDom.remove();     
    }

    render() {
        return (
            <div id={this.props.organizer.id} className="starred-resource">
                  <Card style={{ width: '100%', height: '100%' }}>
                     <Card.Img variant="top" src={this.props.organizer.img} />
                    <Card.Body>
                     <Card.Title><a href={this.props.organizer.website}>{ this.props.organizer.title }</a></Card.Title>
                    
                    <Card.Text>
                    { this.props.organizer.about }
                    <br />
                     </Card.Text>
                     </Card.Body>
                     <Card.Footer>
                     <Button onClick={() => this.handleRemoveItem(this.props.organizer.id)} variant="primary">Remove</Button>
                     </Card.Footer>
                    </Card>
            </div>
        )
    }

}
export default StarredOrganizer;