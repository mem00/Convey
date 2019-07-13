class UsersController < ApplicationController
  before_action :set_user, only: [:update, :destroy]
  before_action :authorize_request, except: [:create]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    @user = User.find_by username: params[:id]
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)
    #from auth lecture
    @user.password = params[:password]
    if @user.save
      handle_login user_params[:username], params[:password]
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:username, :password)
    end
end