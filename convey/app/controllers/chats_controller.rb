class ChatsController < ApplicationController
  before_action :set_chat, only: [:show, :update, :destroy]
  before_action :set_user, only: [:index, :create]
  before_action :authorize_request 

  # GET /chats
  def index
    @chats = Chat.where from_id: @user.id
    render json: @chats
  end

  # GET /chats/1
  def show
    render json: @chat
  end

  # POST /chats
  def create
    @chat = Chat.new chat_params

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
      @user_chats = Chat.where from_id: params[:user_id]
      @chat = @user_chats.find params[:id]
    end

    def set_user
      @user = User.find params[:user_id]
    end

    # Only allow a trusted parameter "white list" through.
    def chat_params
      params.require(:chat).permit(:to_id, :from_id)
    end
end
