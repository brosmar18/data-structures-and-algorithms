const { sortByYear, sortByTitle } = require('../index');

describe('Sorting Movie Objects', () => {
  const movies = [
    { title: 'A Movie', year: 2001, genres: ['Comedy'] },
    { title: 'An Epic', year: 1999, genres: ['Drama'] },
    { title: 'An Action', year: 2000, genres: ['Action'] }
  ];

  describe('sortByYear', () => {
    it('should sort movies by year in descending order', () => {
      const sorted = sortByYear([...movies]);
      expect(sorted.map(movie => movie.year)).toEqual([2001, 2000, 1999]);
    });
  });

  describe('sortByTitle', () => {
    it('should sort movies by title, ignoring leading "An" and "A"', () => {
      const sorted = sortByTitle([...movies]);
      const titles = sorted.map(movie => movie.title);
      expect(titles).toEqual(['An Action', 'An Epic', 'A Movie']);
    });
  });
});
