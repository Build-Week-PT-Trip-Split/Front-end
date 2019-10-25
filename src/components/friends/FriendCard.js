import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

const FriendCard = ({name, image, username, email}) => {

    return (
     
            <Card className="cardStyle" >
                {/* <CardTitle> {name} </CardTitle> */}
                <CardBody>
                <CardImg top width="100%" src={image} alt={name} />
                <CardText className="cardFooter" >
                    <div><small className="text-muted">Username: {username}</small></div>
                    <div><small className="text-muted">Email: {email}</small></div>
                </CardText>
                </CardBody>
            </Card>
    )

}

export default FriendCard