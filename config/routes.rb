Rails.application.routes.draw do
  get "*all", to: "react#index"
  root "react#index"
end
