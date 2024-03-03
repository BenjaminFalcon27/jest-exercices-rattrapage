
import { setPagination } from '../setPagination';

describe('setPagination', () => {
  it('should return pagination with default values', () => {
    const result = setPagination({});
    expect(result).toEqual({
      total: 1,
      numberItems: 1,
      numberPages: 1,
      currentPage: 1,
    });
  });
});

