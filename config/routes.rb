Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

   namespace :api, defaults: {format: :json} do
    resources :users
    resource :session, only: [:create, :destroy]
    resources :boards
    resources :pins
    resources :boards_pins, only: [:create, :destroy]
    get '/search', to: 'search#search'
  end

end
