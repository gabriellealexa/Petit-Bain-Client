import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class StarredResource extends React.Component {

    constructor(){
        super()
        this.state = {
            starredResources: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/starred_resources')
        .then(resp => resp.json())
        .then(sr => {
            sr.map(resource => {
                if (resource.user_id === this.props.user.id) {
                    this.setState({
                        starredResources: [resource, ...this.state.starredResources]
                    })
                }
            })
        })
    }

    handleRemoveItem = (id) => {
        this.state.starredResources.map(sr => {
            if (sr.resource_id === id) {
                fetch(`http://localhost:3000/starred_resources/${sr.id}`, {
                    method: 'DELETE'
                })
            }
        })           
    }

    render() {
        return (
            <div className="starred-resource">
                  <Card style={{ width: '100%', height: '100%' }}>
                     <Card.Img variant="top" src={this.props.resource.img} />
                    <Card.Body>
                     <Card.Title><a href={this.props.resource.link}>{ this.props.resource.title }</a></Card.Title>
                    
                    <Card.Text>
                    { this.props.resource.details }
                    <br />
                     </Card.Text>
                     </Card.Body>
                     <Card.Footer>
                     <Button onClick={() => this.handleRemoveItem(this.props.resource.id)} variant="primary">Remove</Button>
                     </Card.Footer>
                    </Card>
            </div>
        )
    }

}
export default StarredResource;