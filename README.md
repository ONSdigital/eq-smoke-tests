# eq-smoke-tests

## Background

This repo is a simple repeatable smoke test that verifies the eQ services work together
So that when new versions of service are deployed we can be sure we haven't broken anything.

## PREREQUISITE
Oracle JDK v1.8+
You can check your Java version in the terminal with java -version (single dash)

Be sure to install the JDK not the JRE.

## Installation
```
yarn install
```

## How to run
To run on eq-compose locally:
```
yarn test
```

To run on eq-staging env
```
BASE_URL=https://staging-author.dev.eq.ons.digital yarn test
```

To run on eq-staging env in headless mode
```
BASE_URL=https://staging-author.dev.eq.ons.digital yarn test_headless
```