class ApplicationController < ActionController::API

  def index
    render file: "#{Rails.root}/public/index.html"
  end
  
  #from auth lecture  
  def authorize_request
    header = request.headers['Authorization']
    header = header.split(' ').last if header
    begin
      @decoded = JsonWebToken.decode(header)
      @current_user = User.find(@decoded[:user_id])
    rescue ActiveRecord::RecordNotFound => e
      render json: { errors: e.message }, status: :unauthorized
    rescue JWT::DecodeError => e
      render json: { errors: e.message }, status: :unauthorized
    end
  end
  
  #from auth lecture
  def handle_login username, password
    @user = User.find_by_username(username)
    if @user.authenticate(password) 
      token = JsonWebToken.encode(user_id: @user.id, username: @user.username)
      render json: { token: token }, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end
end
