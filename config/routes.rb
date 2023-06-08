namespace :api do
    namespace :controller do
      resources :user, only: [:create]
      resources :movie, only: [:index, :create, :update, :destroy]
      post '/login', to: 'auth#create'
      get '/profile', to: 'user#profile'
      get '/movie', to: 'movie#index'
      get '/movie/search', to: 'movie#search'
    end
end