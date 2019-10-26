import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import placeholder from '../../assets/no-picture-available-icon-13.jpg';

const FriendCard = ({name, image, username, email}) => {

    return (
     
            <Card className="cardStyle" >
                {/* <CardTitle> {name} </CardTitle> */}
                <CardBody>
                {(image) ? <CardImg top width="100%" src={image} alt="user photo" /> : <CardImg top width="100%" src={placeholder} alt="default photo" />}
                <CardText className="cardFooter" >
                    <div className="card-content"><p className="text-muted">Username: {username}</p></div>
                    <div className="card-content"><p className="text-muted">Email: {email}</p></div>
                </CardText>
                </CardBody>
            </Card>
    )

}

export default FriendCard