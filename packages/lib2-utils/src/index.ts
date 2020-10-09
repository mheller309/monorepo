import { List } from 'lodash';
import _chunk from 'lodash/chunk';

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

export const diff = (a: number, b: number) => {
  return a - b;
};

export const toUppercase = (a: string) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a.toUpperCase();
};

export const toLowercase = (a: string) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a.toLocaleLowerCase();
};

export function chunk<T>(
  array: List<T> | null | undefined,
  size?: number
): T[][] {
  return _chunk(array, size);
}
