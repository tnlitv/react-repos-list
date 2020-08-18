import React from 'react';
import Search from '../Search';
import Login from '../Login';
import Loader from '../../components/Loader/Loader';
import ErrorBox from '../../components/ErrorBox/ErrorBox';
import { useGetIsLoggedInQuery } from '../../generated/graphql';

const App: React.FC = () => {
    const { data, loading, error } = useGetIsLoggedInQuery();

    if (loading) return <Loader />;
    if (error) return <ErrorBox msg="Failed to render" />;
    return !!data && !data.isLoggedIn ? <Login /> : <Search />;
};

export default App;
