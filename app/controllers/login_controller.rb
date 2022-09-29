class LoginController < ApplicationController
  def new
    redirect_to root_url if current_user
  end

  def create
    user = authenticate_with_google
    if user
      session[:user_id] = user.id
      redirect_to root_url
    else
      redirect_to login_url
    end
  end

  def destroy
    reset_session
    redirect_to login_url
  end

  private

  def authenticate_with_google
    id_token = flash[:google_sign_in]["id_token"]
    error = flash[:google_sign_in][:error]
    if id_token
      account = GoogleSignIn::Identity.new(id_token)
      user = User.find_or_create_by(google_id: account.user_id)
      user.update!({
        email: account.email_address,
        avatar_url: account.avatar_url,
        given_name: account.given_name,
        family_name: account.family_name,
      })
      user
    elsif error
      logger.error "Google authentication error: #{error}"
      nil
    end
  end
end
