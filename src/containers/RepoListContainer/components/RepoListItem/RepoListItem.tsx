import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Link from '@material-ui/core/Link';

export interface Repository {
    id: string;
    name: string;
    forkCount: number;
    stargazers: {
        totalCount: number;
    };
    url: string;
    owner: {
        login: string;
    };
}

interface Props {
    repository: Repository;
}

export const RepoListItem: React.FC<Props> = ({ repository }: Props) => (
    <TableRow key={repository.id} data-testid="repo-list-item">
        <TableCell component="th" scope="row">
            <Link href={repository.url} target="#blank" rel="noopener">
                {repository.name}
            </Link>
        </TableCell>
        <TableCell align="right">{repository.owner.login}</TableCell>
        <TableCell align="right">{repository.forkCount}</TableCell>
        <TableCell align="right">{repository.stargazers.totalCount}</TableCell>
    </TableRow>
);

export default RepoListItem;
