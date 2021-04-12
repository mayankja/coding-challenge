Rails.application.routes.draw do
  root 'homepage#index'

  namespace :api do
    namespace :v1 do
      resources :apartments do
        collection do
          get :search
        end
      end
    end
  end
end
