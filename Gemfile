source 'https://rubygems.org'

ruby '2.1.2'

gem 'rails', '4.1.1'
gem 'rails_admin'
gem 'devise'

gem 'pg'
gem 'unicorn'

gem 'sass-rails', '~> 4.0.3'
gem 'uglifier', '~> 2.5.0'
gem 'coffee-rails', '~> 4.0.1'
gem 'jquery-rails'
gem 'slim-rails'

gem 'paperclip'
gem 'aws-sdk'

gem 'turbolinks'

group :doc do
  gem 'sdoc', require: false
end

group :development do
  gem 'foreman', require: false
  gem 'annotate', ">=2.6.0", require: false
  gem 'turbo_dev_assets'
  gem 'rails_best_practices', '~> 1', require: false
end

group :development, :test do
  gem 'rspec-rails', '~> 3.0'
  gem 'dotenv-rails'
  gem "codeclimate-test-reporter", require: false
  # gem 'scss-lint', '~> 0.23' # Enable when sass-rails is updated
end

group :production do
  gem 'rails_12factor'
  gem 'sentry-raven'
  gem 'newrelic_rpm'
  gem 'heroku_rails_deflate'
end
