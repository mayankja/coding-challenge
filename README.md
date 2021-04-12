
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
