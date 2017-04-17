source 'https://rubygems.org'

ruby '2.4.1'

gem 'rails', '4.2.5'
gem 'sprockets-rails', '~> 2.3.3'
gem 'rails_admin'
gem 'devise'

gem 'pg'
gem 'unicorn'

gem 'sass-rails', '~> 5.0.3'
gem 'uglifier', '~> 2.7'
gem 'coffee-rails', '~> 4.1.0'
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
  gem 'annotate', ">=2.7.0", require: false
  gem 'turbo_dev_assets'
  gem 'rails_best_practices', '~> 1', require: false
end

group :development, :test do
  gem 'dotenv-rails'
  gem "codeclimate-test-reporter", require: false
  # gem 'scss-lint', '~> 0.23' # Enable when sass-rails is updated
end

group :test do
  gem 'rspec-rails', '~> 3.0'
  gem 'factory_girl_rails'
  gem 'approvals'
end

group :production do
  gem 'rails_12factor'
  gem 'sentry-raven'
  gem 'newrelic_rpm'
  gem 'heroku_rails_deflate'
end
