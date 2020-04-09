import { shape, string, number } from 'prop-types';

export const bookProps = shape({
  id: number.isRequired,
  author: string,
  title: string,
  genre: string,
  publisher: string,
  year: string,
  imageUrl: string
});
