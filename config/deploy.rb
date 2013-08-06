set :application, "russchenmedia"

server "russchenmedia-production.rusweb.nl", :app, :web, :db, :primary => true

set :scm, :git
set :repository, "git@github.com:martijnrusschen/russchenmedia.git"
set :scm_passphrase, ""

set :user, "deploy"
set :use_sudo, false

set :deploy_to, "/var/www/russchenmedia"
set :deploy_via, :remote_cache # prevent doing a full repository clean every time

# Clean up old releases after deploy
set :keep_releases, 5
after "deploy:restart", "deploy:cleanup"

# If you are using Passenger mod_rails uncomment this:
namespace :deploy do
  task :start do ; end
  task :stop do ; end
  task :restart, :roles => :app, :except => { :no_release => true } do
    run "#{try_sudo} touch #{File.join(current_path, 'tmp', 'restart.txt')}"
  end
end
