import { check } from './managers';

describe('config/validation-helpers/managers', () => {
  it('should have no errors', () => {
    const res = check({
      resolvedRule: { matchManagers: ['npm', 'regex'] },
      currentPath: '',
    });
    expect(res).toEqual([]);
  });
});
