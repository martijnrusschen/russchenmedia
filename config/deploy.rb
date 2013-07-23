require 'capistrano/ext/multistage'

set :application, "russchenmedia"

set :scm, :git
set :repository, "git@github.com:martijnrusschen/russchenmedia.git"
set :scm_passphrase, ""
set :use_sudo, true

set :user, "root"

set :stages, ["staging"]
set :default_stage, "staging"

