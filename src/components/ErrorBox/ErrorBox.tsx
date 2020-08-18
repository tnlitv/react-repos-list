import React from 'react';
import PropTypes from 'prop-types';
import CenterWrapper from '../CenterWrapper/CenterWrapper';
import { Typography } from '@material-ui/core';

interface Props {
    msg?: string;
}

export const ErrorBox: React.FC<Props> = ({ msg = "Couldn't load data" }) => (
    <CenterWrapper>
        <Typography>{msg}</Typography>
    </CenterWrapper>
);

ErrorBox.propTypes = {
    msg: PropTypes.string,
};

export default ErrorBox;
