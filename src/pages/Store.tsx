import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import storeItems from '../data/items.json'
import { StoreItem } from '../components/StoreItem';

interface IStoreProps {

}

export const Store: React.FunctionComponent<IStoreProps> = (props) => {
    return (
        <>
            <h1>Store</h1>
            <Row md={2} xs={1} lg={2} className='g-3'>
                {storeItems.map((item) => {
                    return (
                        <Col key={item.id}><StoreItem {...item} /></Col>
                    )
                })}
            </Row>

        </>
    )
};


