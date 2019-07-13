class AuthenticationController < ApplicationController
  #from auth lecture
  def login
    handle_login params[:username], params[:password]
  end   

  private

  def login_params
    params.permit(:username, :password)   
  end
  
end
