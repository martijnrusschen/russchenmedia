source 'https://rubygems.org'

ruby '2.4.2'

gem 'rails', '5.1.4'
gem 'sprockets-rails', :require => 'sprockets/railtie'
gem 'rails_admin'
gem 'devise'

gem 'pg'
gem 'puma'

gem 'sass-rails'
gem 'uglifier'
gem 'coffee-rails'
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
  gem 'annotate', require: false
  gem 'turbo_dev_assets'
  gem 'rails_best_practices', require: false
  gem 'listen'
end

group :development, :test do
  gem 'dotenv-rails'
  gem "codeclimate-test-reporter", require: false
  # gem 'scss-lint', '~> 0.23' # Enable when sass-rails is updated
end

group :test do
  gem 'rspec-rails', '~> 3.5'
  gem 'factory_girl_rails'
  gem 'approvals'
  gem 'rails-controller-testing'
end

group :production do
  gem 'rails_12factor'
  gem 'sentry-raven'
  gem 'newrelic_rpm'
  gem 'heroku-deflater'
end
