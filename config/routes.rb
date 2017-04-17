Rails.application.routes.draw do
  #Old urls to root
  get "/rss" => redirect("/")
  get "/nieuws" => redirect("/")
  get "/nieuws_bekijken" => redirect("/")
  get "/project.php" => redirect("/")
  get "/projecten" => redirect("/")
  get "/wiezijnwij" => redirect("/")
  get "/index" => redirect("/")
  get "/contact" => redirect("/")
  get "/sitemap" => redirect("/")

  devise_for :users
  mount RailsAdmin::Engine => '/zamboya', :as => 'rails_admin'
  root 'home#index'

  resources :projects, only: [:index, :show], path: '/'
end
