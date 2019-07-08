class ChatsController < ApplicationController
  before_action :set_chat, only: [:show, :update, :destroy]
  before_action :set_user, only: [:index, :create]
  before_action :authorize_request 

  # GET /chats
  def index
    @chats = @user.chats

    render json: @chats
  end

  # GET /chats/1
  def show
    render json: @chat
  end

  # POST /chats
  def create
    @chat = @user.chats.new chat_params

    if @chat.save
      render json: @chat
    else
      render json: @chat.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /chats/1
  def update
    if @chat.update chat_params
      render json: @chat
    else
      render json: @chat.errors, status: :unprocessable_entity
    end
  end

  # DELETE /chats/1
  def destroy
    @chat.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_chat
      @user = User.find params[:user_id]
      @chat = @user.chats.find params[:id]
    end

    def set_user
      @user = User.find params[:user_id]
    end

    # Only allow a trusted parameter "white list" through.
    def chat_params
      params.require(:chat).permit(:title, :user_id)
    end
end
