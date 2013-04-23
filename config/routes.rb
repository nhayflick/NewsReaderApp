NewsReaderApp::Application.routes.draw do
  resources :feeds, :only => [:index, :create, :show] do
    resources :entries, :only => [:index]
  end
  #resources :entries, :only => [:index]
end
