Rails.application.routes.draw do
  # get 'messages/index'
  # get 'messages/create'
  root 'groups#index'
  devise_for :users
  resources :users, only: [:index,:edit,:update]
  resources :groups, except: :show do
    resources :messages, only: [:index, :create]
  end
end
