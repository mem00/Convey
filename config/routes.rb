Rails.application.routes.draw do
  
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
  
  #from auth lecture
  post '/auth/login', to: 'authentication#login'
  resources :users do
    resources :chats do
      resources :messages
    end
  end
  mount ActionCable.server => '/cable'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
