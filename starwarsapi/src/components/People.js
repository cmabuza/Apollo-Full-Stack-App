import React from 'react';
import { Card, Grid} from 'semantic-ui-react';


export default function People({ data }) {
    return (
        <>
            <h1> People</h1>
            <Grid columns={3}>
                { data.map(( people, i) => {
                    return(
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Header> { people.name} </Card.Header>
                                <Card.Content></Card.Content>
                                <Card.Description>
                                    <strong>Height: </strong>
                                    <p> { people.height} </p>
                                    <strong>Mass: </strong>
                                    <p> { people.mass } </p>
                                    <strong>Gender: </strong>
                                    <p> { people.gender } </p>
                                    <strong>Homeworld: </strong>
                                    <p> { people.homeworld } </p>
                                </Card.Description>
                            </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </>
    )
}
