import React from "react";
import Card from "react-bootstrap/Card";
import Lukas from "./lukas.jpeg"

function GitHubCard(){
    return(
        <div>
            <Card style={{width: "18rem"}}>
                <Card.Img 
                style={{width:'200px'}} vatiant='top' src={Lukas}
                />
                <Card.Body>
                    <Card.Title>
                        Lukas Linares
                    </Card.Title>
                    <Card.Text>
                        I am working towards becoming a programer
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GitHubCard