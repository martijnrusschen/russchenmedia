set :application, "russchenmedia"

server "russchenmedia-production.rusweb.nl", :app, :web, :db, :primary => true

set :scm, :git
set :repository, "git@github.com:martijnrusschen/russchenmedia.git"
set :scm_passphrase, ""
set :use_sudo, true

set :user, "root"

set :deploy_to, "/var/www/russchenmedia"

