import { sum, toLowercase } from '../src';

describe('blah', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });

  it("should lower case", () => {
    expect(toLowercase("ASD")).toEqual("asd")
  })
});
