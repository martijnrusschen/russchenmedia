Russchenmedia::Application.routes.draw do
  devise_for :users
  mount RailsAdmin::Engine => '/zamboya', :as => 'rails_admin'
  root 'home#index'

  resources :projects, only: [:index, :show], path: '/'
end
