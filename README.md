# Coding challenge: Apartments search
* Create a simple page to search for apartments. Here's one example of how it could look like (including bonus features):


  <img src="https://user-images.githubusercontent.com/636075/70719197-d08fc300-1cf1-11ea-9b7c-c767f8d30abd.png" width="360">
  <img src="https://user-images.githubusercontent.com/636075/70722069-ea7fd480-1cf6-11ea-85d4-05d096da5e7f.png" width="360">

* Feel free to style it as you wish, try not to make it look like the example above.
* An apartment should have:
  - title
  - price
  - sqm
  - number of bedrooms
  - number of bathrooms
  - picture
* Add filters for the search: per price, per sqm, per # of bedrooms… 
* Bonus points! (not mandatory)
  - Add a left menu you can toggle in/out
  - Infinite scrolling: When scrolling to the en of the apartments list, it automaticaly loads more apartments

  
## To start up the application in your local Docker environment:

```bash
git clone https://github.com/mayankja/coding-challenge.git
cd apartments_search
docker-compose build
docker-compose up
docker-compose run web rake db:create # Create databases.
docker-compose run web rake db:migrate # Run migrations.
docker-compose run web rake db:seed # Run seed.
```

## Requirements

* Ruby ruby 3.0.0p0 or > 2.2
* Rails 6.1.x
* Bundler 2.2.15
* PostgreSQL

To setup thing


```bash
git clone https://github.com/mayankja/coding-challenge.git
cd apartments_search
```

Set Database username and password in database.yml according to your postgres engine.

```bash
gem install bundler:2.2.15
bundle install
npm install
#set env according your environment.
RAILS_ENV=env bundle exec rails db:create # Create databases.
RAILS_ENV=env bundle exec rails db:migrate # Run migrations.
RAILS_ENV=env bundle exec rails db:seed # Run seed to genrate the data not on production.
RAILS_ENV=env bundle exec rails s
```

To run on development on new tab

 ```bash
 	bin/webpack
 ```



Enjoy!
