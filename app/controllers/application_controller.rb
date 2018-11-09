class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!, except: :sign_up
  before_action :devise_params, if: :devise_controller?

  protected

   def devise_params
    devise_parameter_sanitizer.permit(:sign_up, keys:[:name])
   end

end
