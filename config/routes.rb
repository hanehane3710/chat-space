Rails.application.routes.draw do
  # get 'messages/index'
  # get 'messages/create'

  devise_for :users
  resources :users, only: [:index,:edit,:update]
  devise_scope :user do
    authenticated :user do
      root :to => 'groups#index', as: :authenticated_root
    end
    unauthenticated :user do
      root :to => 'devise/sessions#new', as: :unauthenticated_root
    end
  end
  resources :groups, except: :show do
    resources :messages, only: [:index, :create]
  end
end
