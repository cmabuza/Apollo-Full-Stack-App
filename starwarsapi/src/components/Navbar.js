import React from 'react';
import { Menu, Container} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <Menu inverted>
            <Container>
            <Link to='/'><Menu.Item name="StarWars API" /></Link>
                
            <Link to='/people'><Menu.Item name="People" /></Link>
                
            </Container>
        </Menu>
    )
}
