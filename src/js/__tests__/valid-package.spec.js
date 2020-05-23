describe('Branch Name and Package Name must match & Package Version and Tag Version must match if it exists.', () => {
  test('Match names and versions(if exists)', async () => {
    const packageName = require('../../../package.json').name;
    const packageVersion = require('../../../package.json').version;

    const CIRCLE_TAG = process.env.CIRCLE_TAG;

    if (CIRCLE_TAG) {
      const [tagName, tagVersion] = CIRCLE_TAG.split('/');
      expect(packageName).toEqual(tagName);
      expect('v' + packageVersion).toEqual(tagVersion);
    }
  });
});
