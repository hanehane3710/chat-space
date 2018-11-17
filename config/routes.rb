Rails.application.routes.draw do
  # get 'messages/index'

  # get 'messages/create'

  devise_for :users
  root 'groups#index'
  resources :users, only: [:edit,:update]
  resources :groups, except: :show do
    resources :messages, only: [:index, :create]
  end
end
