import React from 'react';
import { useRepositoriesQuery } from '../../generated/graphql';

const ReposList = () => {
    const { data, error, loading } = useRepositoriesQuery();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }

    return <div>{JSON.stringify(data)}</div>;
};

export default ReposList;
