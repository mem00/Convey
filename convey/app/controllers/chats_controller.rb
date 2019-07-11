class ChatsController < ApplicationController
  before_action :set_chat, only: [:show, :update, :destroy]
  before_action :set_user, only: [:index, :create]
  before_action :authorize_request 

  # GET /chats
  def index
    @chats_from = Chat.where from_id: @user.id
    @chats_to = Chat.where to_id: @user.id
    render json: {chats_from: @chats_from, chats_to: @chats_to }
  end

  # GET /chats/1
  def show
    render json: @chat
  end

  # POST /chats
  def create
    @chat = Chat.new chat_params

    if @chat.save
      #https://medium.com/@dakota.lillie/using-action-cable-with-react-c37df065f296
      serialized_data = ActiveModelSerializers::Adapter::Json.new(
        ChatSerializer.new @chat
      ).serializable_hash
      ActionCable.server.broadcast "current_user_#{@current_user.id}", serialized_data 
      head :ok
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
      @chat = @user_chats.where to_id: params[:id]
    end

    def set_user
      @user = User.find params[:user_id]
    end

    # Only allow a trusted parameter "white list" through.
    def chat_params
      params.require(:chat).permit(:to_id, :from_id)
    end
end
