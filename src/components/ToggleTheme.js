import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import dark from './../img/dark.png';
import light from './../img/light.png';

function ToggleTheme(props) {
   const {toggleTheme, theme} = props;
   const styles = {
    backGroundColor: theme.buttonBackground,
    color: theme.textColor
   }
    return (
        <React.Fragment>
           <div className="d-flex justify-content-end">
            <Button variant="dark-outline" style={styles}  className="p-1 m-2" size='lg' onClick={toggleTheme}>
                {theme.textColor === "AntiqueWhite" ? <img src={light} alt='light theme'/> : <img src={dark} alt='dark theme'/>}
            </Button>
            </div>
        </React.Fragment>
    );
}

ToggleTheme.propTypes = {
    toggleTheme: PropTypes.func,
    theme: PropTypes.object
}

export default ToggleTheme;