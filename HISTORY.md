# Tree House Change Log
All notable changes to this project will be documented in this file. 

## [5.0.0] - 2021-07-07
### Updated dependencies
- Updated all dependencies 
- BREAKING CHANGE: Bumped minimal node version to 10
- BREAKING CHANGE: Joi schema required Joi.object() wrapper
  
  Validation schemas before this version:
  ```
    const schema = {
      body: {
        name: Joi.string().required(),
      },
    };
  ```
  
  Validation schemas in version 5.0.0:
  ```
    const schema = {
      body: Joi.object({
        name: Joi.string().required(),
      }),
    };
  ```
  
- BREAKING CHANGE: The setSwagger is now asynchronous and validates the swagger document before setting it.
  
  The setSwagger function before this version:
  ```
  setSwagger(app, '/documentation', './tests/assets/docs-v2-valid.yml');
  ```

  The setSwagger function in version 5.0.0:
  ```
  await setSwagger(app, '/documentation', './tests/assets/docs-v2-valid.yml');
  ```

## [0.1.0] - 2017-05-03
### Added
- Initialise a full application
