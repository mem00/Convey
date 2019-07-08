Rails.application.routes.draw do
  #from auth lecture
  post '/auth/login', to: 'authentication#login'
  resources :users do
    resources :chats
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
