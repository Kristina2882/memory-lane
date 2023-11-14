import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

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
                {theme.textColor === "AntiqueWhite" ? "🌝" : "🌚"}
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