import { shape, string, number } from 'prop-types';

export const commentProps = shape({
  id: number.isRequired,
  username: string,
  comment: string,
  imageUrl: string
});
