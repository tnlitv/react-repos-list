import React from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
// this adds custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect';
import { MockedProvider } from '@apollo/client/testing';
import { MockedProviderProps } from '@apollo/client/utilities/testing/mocking/MockedProvider';

const renderMockedProvider = (
    node: JSX.Element,
    { mocks, addTypename = false, defaultOptions, cache, resolvers }: MockedProviderProps,
    options: RenderOptions = {},
): RenderResult => {
    return render(
        <MockedProvider
            mocks={mocks}
            addTypename={addTypename}
            defaultOptions={defaultOptions}
            cache={cache}
            resolvers={resolvers}
        >
            {node}
        </MockedProvider>,
        options,
    );
};

interface Props {
    dataTestId: string;
}

const MockedComponent: React.FC<Props> = ({dataTestId}) => <div data-testid={dataTestId} />;

export * from '@testing-library/react';
export { renderMockedProvider, MockedComponent };
