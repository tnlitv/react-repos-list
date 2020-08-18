import React from 'react';
import { CircularProgress } from '@material-ui/core';
import CenterWrapper from '../CenterWrapper/CenterWrapper';

export const Loader: React.FC = () => (
    <CenterWrapper>
        <CircularProgress />
    </CenterWrapper>
);

export default Loader;
