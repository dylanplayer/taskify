class ApplicationController < ActionController::Base  
  def current_user
    user_id = session[:user_id]
    if user_id
      User.find(user_id)
    else
      nil
    end
  end

  private
  
  def require_login
    redirect_to login_url unless current_user
  end
end
