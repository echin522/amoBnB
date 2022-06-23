Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get '*path' => redirect('/404.html')
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :destroy, :show, :update]
    resources :listings, only: [:create, :destroy, :show, :update, :index]
    resources :reviews, only: [:create, :destroy, :update, :update, :index]
    resources :reservations, only: [:index, :create, :destroy, :update, :show]
  end
end