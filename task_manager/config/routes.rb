Rails.application.routes.draw do
  root "tasks#index"
  resources :tasks
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post 'tasks/:id/toggle' ,to: 'tasks#toggle'
end
