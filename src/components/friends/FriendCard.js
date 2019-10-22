import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

const FriendCard = ({name, image, username, email}) => {

    return (
     
            <Card className="cardStyle" >
                {/* <CardTitle> {name} </CardTitle> */}
                <CardBody>
                <CardImg top width="100%" src={image} alt={name} />
                <CardText className="cardFooter" >
                    <small className="text-muted">{username}</small>
                    <small className="text-muted">{email}</small>
                </CardText>
                </CardBody>
            </Card>
    )

}

export default FriendCard