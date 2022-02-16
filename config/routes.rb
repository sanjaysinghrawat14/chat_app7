Rails.application.routes.draw do
  # root "pages#home"
  root "chatroom#index"
  get "login",  to: "sessions#new"
end
