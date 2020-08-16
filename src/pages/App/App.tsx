import React from 'react';
import Search from '../Search';
import Login from '../Login/index';

import { useGetIsLoggedInQuery } from '../../generated/graphql';

function App() {
    const { data } = useGetIsLoggedInQuery();

    return !!data && !data.isLoggedIn ? <Login /> : <Search />;
}

export default App;
