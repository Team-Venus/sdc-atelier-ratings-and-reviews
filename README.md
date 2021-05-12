# sdc-atelier-ratings-and-reviews

System redesign for Atelier Project Catwalk's Single Product Ratings and Reviews widget.

# Dependencies

- mongoose
- express
- body-parser

## Dev Dependencies:

- eslint
- nodemon
- eslint
- eslint-config-airbnb-base
- eslint-plugin-import

# Install

- clone repo to local computer
- cd into project directory
- FOR BOTH SERVER AND DATABASE INSTANCES: Must have Node installed.
- FOR DATABASE INSTANCE: Must have Mongo installed with Mongo Tools.
- FOR DATABASE INSTANCE: `npm run bulk-import`.
- FOR DATABASE INSTANCE after `npm run bulk-import` finishes : `npm run db:init`.
- `npm install` after all the above has completed.
- FOR DATABASE INSTANCE: Please test the database queries using `npm run db:test` and verify the following console messages come up:
- [ ] 'ProductToReviews 3 docs check success: '
- [ ] 'ReviewToPhotos 3 docs check success: '
- [ ] 'ProductToCharacteristics 3 docs check success: '
- [ ] 'ReviewToCharacteristicReviews 3 docs check success: '
- [ ] 'CharacteristicToCharacteristicReviews 3 docs check success: '
- [ ] 'reviewsQuery reponse:'
- [ ] 'productDataQuery response: '

# Running This Service

- This is at developer level right now:
- `npm run start:dev`

# Tests

- Database test after the install setup: `npm run db:init`
- Server