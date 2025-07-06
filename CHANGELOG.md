## [7.0.2](https://github.com/sebbo2002/gitlab-badges/compare/v7.0.1...v7.0.2) (2025-07-06)

## [7.0.1](https://github.com/sebbo2002/gitlab-badges/compare/v7.0.0...v7.0.1) (2025-06-18)

# [7.0.0](https://github.com/sebbo2002/gitlab-badges/compare/v6.0.3...v7.0.0) (2025-05-12)

### chore

- Drop node v18 support ([3e18405](https://github.com/sebbo2002/gitlab-badges/commit/3e18405ac1e1be738a414623f97169c802567f99))

### BREAKING CHANGES

- Drop node.js v18 Support

This node.js version is no longer supported. For more information see https://nodejs.dev/en/about/releases/

## [6.0.3](https://github.com/sebbo2002/gitlab-badges/compare/v6.0.2...v6.0.3) (2025-01-09)

### Bug Fixes

- **deps:** downgrade eslint to v9.13.0 to resolve typescript-eslint issue ([9a83f35](https://github.com/sebbo2002/gitlab-badges/commit/9a83f35bd76b832b03cdbe9376085d5bff8c1f7b)), closes [#10353](https://github.com/sebbo2002/gitlab-badges/issues/10353) [typescript-eslint/typescript-eslint#10353](https://github.com/typescript-eslint/typescript-eslint/issues/10353)

## [6.0.2](https://github.com/sebbo2002/gitlab-badges/compare/v6.0.1...v6.0.2) (2024-11-15)

## [6.0.1](https://github.com/sebbo2002/gitlab-badges/compare/v6.0.0...v6.0.1) (2024-10-16)

# [6.0.0](https://github.com/sebbo2002/gitlab-badges/compare/v5.1.2...v6.0.0) (2024-09-11)

### chore

- Drop support for node.js v19 and v21 ([2fff079](https://github.com/sebbo2002/gitlab-badges/commit/2fff079040a377fbe9ecc340388f6a29b863cf80))

### BREAKING CHANGES

- Drop node.js v21 Support

These node.js versions are no longer supported. For more information see https://nodejs.dev/en/about/releases/

## [5.1.2](https://github.com/sebbo2002/gitlab-badges/compare/v5.1.1...v5.1.2) (2024-08-14)

## [5.1.1](https://github.com/sebbo2002/gitlab-badges/compare/v5.1.0...v5.1.1) (2024-03-26)

# [5.1.0](https://github.com/sebbo2002/gitlab-badges/compare/v5.0.2...v5.1.0) (2024-01-07)

### Features

- Remove node-fetch dependency ([a7a1a79](https://github.com/sebbo2002/gitlab-badges/commit/a7a1a792e7db2045c368801a22b5726d0100cf0b))

## [5.0.2](https://github.com/sebbo2002/gitlab-badges/compare/v5.0.1...v5.0.2) (2023-10-25)

### Reverts

- Revert "ci: Run tests with node.js v18, v20 and v21" ([405853b](https://github.com/sebbo2002/gitlab-badges/commit/405853bbd7fc55eb224ff657af7dab26f9482d88))
- Revert "ci: Downgrade is-semantic-release till it's fixed" ([91c2ab5](https://github.com/sebbo2002/gitlab-badges/commit/91c2ab59d0559a060c11d07973382c465dd3345d))

## [5.0.2-develop.3](https://github.com/sebbo2002/gitlab-badges/compare/v5.0.2-develop.2...v5.0.2-develop.3) (2023-10-18)

### Reverts

- Revert "ci: Run tests with node.js v18, v20 and v21" ([1b245a5](https://github.com/sebbo2002/gitlab-badges/commit/1b245a58587bc6871e8b1633beff1f1bca05970f))

## [5.0.2-develop.2](https://github.com/sebbo2002/gitlab-badges/compare/v5.0.2-develop.1...v5.0.2-develop.2) (2023-09-27)

## [5.0.2-develop.1](https://github.com/sebbo2002/gitlab-badges/compare/v5.0.1...v5.0.2-develop.1) (2023-08-24)

### Reverts

- Revert "ci: Downgrade is-semantic-release till it's fixed" ([91c2ab5](https://github.com/sebbo2002/gitlab-badges/commit/91c2ab59d0559a060c11d07973382c465dd3345d))

## [5.0.1](https://github.com/sebbo2002/gitlab-badges/compare/v5.0.0...v5.0.1) (2023-08-17)

## [5.0.1-develop.2](https://github.com/sebbo2002/gitlab-badges/compare/v5.0.1-develop.1...v5.0.1-develop.2) (2023-08-02)

## [5.0.1-develop.1](https://github.com/sebbo2002/gitlab-badges/compare/v5.0.0...v5.0.1-develop.1) (2023-08-01)

# [5.0.0](https://github.com/sebbo2002/gitlab-badges/compare/v4.0.0...v5.0.0) (2023-06-14)

### Build System

- Deprecate node.js v14 / v17 ([7a2de45](https://github.com/sebbo2002/gitlab-badges/commit/7a2de45c12f19a1ec441b3a004f4aa935efc197c))

### BREAKING CHANGES

- The node.js versions v14 and v17 are no longer maintained and are therefore no longer supported. See https://nodejs.dev/en/about/releases/ for more details on node.js release cycles.

# [5.0.0-develop.1](https://github.com/sebbo2002/gitlab-badges/compare/v4.0.0...v5.0.0-develop.1) (2023-06-14)

### Build System

- Deprecate node.js v14 / v17 ([7a2de45](https://github.com/sebbo2002/gitlab-badges/commit/7a2de45c12f19a1ec441b3a004f4aa935efc197c))

### BREAKING CHANGES

- The node.js versions v14 and v17 are no longer maintained and are therefore no longer supported. See https://nodejs.dev/en/about/releases/ for more details on node.js release cycles.

# [4.0.0](https://github.com/sebbo2002/gitlab-badges/compare/v3.0.3...v4.0.0) (2023-03-31)

### Build System

- Deprecate node.js 12 ([426588b](https://github.com/sebbo2002/gitlab-badges/commit/426588b4bb7bde2924bbc92006ca839e960872e1))

### BREAKING CHANGES

- From now on, only node.js ^14.8.0 || >=16.0.0 are supported

# [4.0.0-develop.2](https://github.com/sebbo2002/gitlab-badges/compare/v4.0.0-develop.1...v4.0.0-develop.2) (2023-03-18)

# [4.0.0-develop.1](https://github.com/sebbo2002/gitlab-badges/compare/v3.0.4-develop.2...v4.0.0-develop.1) (2023-02-12)

### Build System

- Deprecate node.js 12 ([426588b](https://github.com/sebbo2002/gitlab-badges/commit/426588b4bb7bde2924bbc92006ca839e960872e1))

### BREAKING CHANGES

- From now on, only node.js ^14.8.0 || >=16.0.0 are supported

## [3.0.4-develop.2](https://github.com/sebbo2002/gitlab-badges/compare/v3.0.4-develop.1...v3.0.4-develop.2) (2023-02-05)

## [3.0.4-develop.1](https://github.com/sebbo2002/gitlab-badges/compare/v3.0.3...v3.0.4-develop.1) (2023-01-01)

## [3.0.3](https://github.com/sebbo2002/gitlab-badges/compare/v3.0.2...v3.0.3) (2022-12-11)

## [3.0.3-develop.3](https://github.com/sebbo2002/gitlab-badges/compare/v3.0.3-develop.2...v3.0.3-develop.3) (2022-12-04)

## [3.0.3-develop.2](https://github.com/sebbo2002/gitlab-badges/compare/v3.0.3-develop.1...v3.0.3-develop.2) (2022-11-17)

## [3.0.3-develop.1](https://github.com/sebbo2002/gitlab-badges/compare/v3.0.2...v3.0.3-develop.1) (2022-11-02)

## [3.0.2](https://github.com/sebbo2002/gitlab-badges/compare/v3.0.1...v3.0.2) (2022-10-18)

## [3.0.2-develop.2](https://github.com/sebbo2002/gitlab-badges/compare/v3.0.2-develop.1...v3.0.2-develop.2) (2022-10-15)

## [3.0.2-develop.1](https://github.com/sebbo2002/gitlab-badges/compare/v3.0.1...v3.0.2-develop.1) (2022-09-11)

## [3.0.1](https://github.com/sebbo2002/gitlab-badges/compare/v3.0.0...v3.0.1) (2022-08-11)

## [3.0.1-develop.2](https://github.com/sebbo2002/gitlab-badges/compare/v3.0.1-develop.1...v3.0.1-develop.2) (2022-08-11)

## [3.0.1-develop.1](https://github.com/sebbo2002/gitlab-badges/compare/v3.0.0...v3.0.1-develop.1) (2022-08-04)

# [3.0.0](https://github.com/sebbo2002/gitlab-badges/compare/v2.0.5...v3.0.0) (2022-07-25)

### Build System

- Native ESM support ([7b86a4f](https://github.com/sebbo2002/gitlab-badges/commit/7b86a4f1187c387a3a5792e1fb72d822b04e3631))

### BREAKING CHANGES

- Only Support for node.js ^12.20.0 || >=14.13.1

# [3.0.0-develop.2](https://github.com/sebbo2002/gitlab-badges/compare/v3.0.0-develop.1...v3.0.0-develop.2) (2022-07-19)

# [3.0.0-develop.1](https://github.com/sebbo2002/gitlab-badges/compare/v2.0.6-develop.4...v3.0.0-develop.1) (2022-06-28)

### Build System

- Native ESM support ([7b86a4f](https://github.com/sebbo2002/gitlab-badges/commit/7b86a4f1187c387a3a5792e1fb72d822b04e3631))

### BREAKING CHANGES

- Only Support for node.js ^12.20.0 || >=14.13.1

## [2.0.6-develop.4](https://github.com/sebbo2002/gitlab-badges/compare/v2.0.6-develop.3...v2.0.6-develop.4) (2022-06-22)

## [2.0.6-develop.3](https://github.com/sebbo2002/gitlab-badges/compare/v2.0.6-develop.2...v2.0.6-develop.3) (2022-06-10)

## [2.0.6-develop.2](https://github.com/sebbo2002/gitlab-badges/compare/v2.0.6-develop.1...v2.0.6-develop.2) (2022-06-08)

## [2.0.6-develop.1](https://github.com/sebbo2002/gitlab-badges/compare/v2.0.5...v2.0.6-develop.1) (2022-06-03)

## [2.0.5](https://github.com/sebbo2002/gitlab-badges/compare/v2.0.4...v2.0.5) (2022-05-21)

### Reverts

- Revert "ci: Remove docker setup" ([655068b](https://github.com/sebbo2002/gitlab-badges/commit/655068b3b9c6139181ae87421db5f8144fae3e18))

## [2.0.5-develop.1](https://github.com/sebbo2002/gitlab-badges/compare/v2.0.4...v2.0.5-develop.1) (2022-05-16)

## [2.0.4](https://github.com/sebbo2002/gitlab-badges/compare/v2.0.3...v2.0.4) (2022-05-04)

## [2.0.4-develop.2](https://github.com/sebbo2002/gitlab-badges/compare/v2.0.4-develop.1...v2.0.4-develop.2) (2022-05-02)

## [2.0.4-develop.1](https://github.com/sebbo2002/gitlab-badges/compare/v2.0.3...v2.0.4-develop.1) (2022-05-02)

## [2.0.3](https://github.com/sebbo2002/gitlab-badges/compare/v2.0.2...v2.0.3) (2022-04-02)

## [2.0.3-develop.1](https://github.com/sebbo2002/gitlab-badges/compare/v2.0.2...v2.0.3-develop.1) (2022-03-31)

## [2.0.2](https://github.com/sebbo2002/gitlab-badges/compare/v2.0.1...v2.0.2) (2022-02-01)

### Bug Fixes

- **build:** Bump node-fetch to 2.6.7 ([53f2952](https://github.com/sebbo2002/gitlab-badges/commit/53f2952e1b3db978a7c27abfb99dbd42583b4076))

## [2.0.2-develop.1](https://github.com/sebbo2002/gitlab-badges/compare/v2.0.1...v2.0.2-develop.1) (2022-01-22)

### Bug Fixes

- **build:** Bump node-fetch to 2.6.7 ([53f2952](https://github.com/sebbo2002/gitlab-badges/commit/53f2952e1b3db978a7c27abfb99dbd42583b4076))

## [2.0.1](https://github.com/sebbo2002/gitlab-badges/compare/v2.0.0...v2.0.1) (2021-12-14)

### Bug Fixes

- **CI:** Fix DockerHub container release ([01b7534](https://github.com/sebbo2002/gitlab-badges/commit/01b753406d1f1ef24a949c7d7b946d99b779d013))

## [2.0.1-develop.4](https://github.com/sebbo2002/gitlab-badges/compare/v2.0.1-develop.3...v2.0.1-develop.4) (2021-12-05)

### Bug Fixes

- **CI:** Fix DockerHub container release ([01b7534](https://github.com/sebbo2002/gitlab-badges/commit/01b753406d1f1ef24a949c7d7b946d99b779d013))

## [2.0.1-develop.3](https://github.com/sebbo2002/gitlab-badges/compare/v2.0.1-develop.2...v2.0.1-develop.3) (2021-10-22)

## [2.0.1-develop.2](https://github.com/sebbo2002/gitlab-badges/compare/v2.0.1-develop.1...v2.0.1-develop.2) (2021-10-01)

## [2.0.1-develop.1](https://github.com/sebbo2002/gitlab-badges/compare/v2.0.0...v2.0.1-develop.1) (2021-10-01)

# [2.0.0](https://github.com/sebbo2002/gitlab-badges/compare/v1.0.0...v2.0.0) (2021-08-03)

### chore

- Remove node.js 10 Support ([2b910c0](https://github.com/sebbo2002/gitlab-badges/commit/2b910c09bc8a41085fc4472159494d8738d5521e))

### BREAKING CHANGES

- Removed support for node.js v10

# [2.0.0-develop.2](https://github.com/sebbo2002/gitlab-badges/compare/v2.0.0-develop.1...v2.0.0-develop.2) (2021-07-27)

# [2.0.0-develop.2](https://github.com/sebbo2002/gitlab-badges/compare/v2.0.0-develop.1...v2.0.0-develop.2) (2021-06-19)

# [2.0.0-develop.2](https://github.com/sebbo2002/gitlab-badges/compare/v2.0.0-develop.1...v2.0.0-develop.2) (2021-06-19)

# [2.0.0-develop.2](https://github.com/sebbo2002/gitlab-badges/compare/v2.0.0-develop.1...v2.0.0-develop.2) (2021-06-18)

# [2.0.0-develop.2](https://github.com/sebbo2002/gitlab-badges/compare/v2.0.0-develop.1...v2.0.0-develop.2) (2021-06-18)

# [2.0.0-develop.1](https://github.com/sebbo2002/gitlab-badges/compare/v1.0.1-develop.1...v2.0.0-develop.1) (2021-06-08)

### chore

- Remove node.js 10 Support ([2b910c0](https://github.com/sebbo2002/gitlab-badges/commit/2b910c09bc8a41085fc4472159494d8738d5521e))

### BREAKING CHANGES

- Removed support for node.js v10

## [1.0.1-develop.1](https://github.com/sebbo2002/gitlab-badges/compare/v1.0.0...v1.0.1-develop.1) (2021-06-07)
