# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.2] - 2025-03-07

### Fixed
- Fixed "franc is not defined" error in the browser by properly exposing franc as a global variable
- Updated webpack configuration to include franc in the bundle instead of treating it as an external dependency

## [1.0.1] - 2025-03-07

### Changed
- Updated package configuration
- Improved documentation
- Fixed line ending issues in various files

## [1.0.0] - 2025-03-07

### Added
- Initial release of @dardanisufi95/franc-bundle
- Browser-compatible UMD bundle of franc language detection library
- Support for direct script tag inclusion
- Support for CommonJS usage
- Demo page for testing functionality
- CDN support via unpkg and jsDelivr 