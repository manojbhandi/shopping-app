import * as React from 'react';
import { Card } from 'react-bootstrap';

export interface IStoreItemProps {
  id: number,
  name: string,
  price: number,
  imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: IStoreItemProps) {
  return (
    <Card>
      <Card.Img variant='top' src={imgUrl} height='400px' style={{ objectFit: 'cover' }} />
    </Card>
  );
}
