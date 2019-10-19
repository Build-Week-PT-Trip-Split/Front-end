import React, {useState, useEffect} from "react";
import axios from "axios";
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const FriendList = () => {
    const [friends, setFriends] = useState([]);

    useEffect( () => {
        axios
        .get(`https://tripsplitr.herokuapp.com/users`)
        .then(res => {
            const data = res.data
            console.log("Friends List Componets: ", data);
            setFriends(data);
        })
        .catch(error => {
            console.log("The data was not returned", error);
          });

    }, []);
    return (
        <div>
            <h1>Friend List Components</h1>
            <Button>Add New Friend</Button>
            <div className="CardComponentStyle">
            {friends.map( (friend) => {
              return  <FriendCard 
              name={friend.name}
              image={friend.img}
              username={friend.username}
              email={friend.email}

              />
            })}
\        </div>
            </div>
    );
};

export default FriendList;

const FriendCard = ({name, image, username, email}) => {

    return (
     
            <Card className="cardStyle" >
                <CardTitle> {name} </CardTitle>
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