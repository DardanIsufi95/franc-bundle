# Publishing Checklist

Before publishing a new version of franc-cjs, please complete the following steps:

## Pre-publish Checklist

1. [ ] Update the version number in `package.json`
2. [ ] Update the CHANGELOG.md (if exists)
3. [ ] Make sure all tests pass: `npm test`
4. [ ] Make sure the bundle builds correctly: `npm run build`
5. [ ] Check the bundle size and contents: `ls -lh dist/`
6. [ ] Update documentation if needed (README.md)
7. [ ] Update the CDN URLs in README.md to reflect the new version number

## Publishing

To publish a new version:

```bash
# Regular release
npm run release

# Beta release
npm run release:beta
```

## Post-publish Checklist

1. [ ] Verify the package is available on npm: `npm view franc-cjs`
2. [ ] Verify the package works by installing it in a test project
3. [ ] Verify the CDN links are working:
   - https://unpkg.com/franc-cjs@x.x.x/dist/franc.min.js
   - https://cdn.jsdelivr.net/npm/franc-cjs@x.x.x/dist/franc.min.js
4. [ ] Create a GitHub release/tag if using GitHub

## Version Numbering

We use Semantic Versioning (SemVer):
- Major version (x.0.0): Breaking changes
- Minor version (0.x.0): New features, no breaking changes
- Patch version (0.0.x): Bug fixes and minor updates 