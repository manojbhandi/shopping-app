import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import storeItems from '../data/items.json'

interface IStoreProps {

}

export const Store: React.FunctionComponent<IStoreProps> = (props) => {
    return (
        <>
            <h1>Store</h1>
            <Row>
                {storeItems.map((item) => {
                    return (
                        <Col><StorItem item={item} /></Col>
                    )
                })}
            </Row>

        </>
    )
};


