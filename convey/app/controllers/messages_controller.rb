class MessagesController < ApplicationController
  before_action :set_message, only: [:show, :update, :destroy]
  before_action :set_messages, only: [:index]

  # GET /messages
  def index 
    render json: @messages
  end

  # GET /messages/1
  def show
    render json: @message
  end

  # POST /messages
  def create
    @message = Message.new(message_params)

    if @message.save
      #https://medium.com/@dakota.lillie/using-action-cable-with-react-c37df065f296
      serialized_date = ActiveModelSerializers::Adapter::Json.new(
        MessageSerializer.new message
      ).serializable_hash
      MessagesChannel.broadcast_to chat, serrialized_data
      head :ok
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /messages/1
  def update
    if @message.update(message_params)
      render json: @message
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  # DELETE /messages/1
  def destroy
    @message.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_message
      @messages =  set_messages
      @message = @messages.find params[:id]
    end

    def set_messages 
      @chat =  Chat.where from_id: params[:user_id], to_id: params[:chat_id]
      @messages = Message.where chat_id: @chat.ids
    end

    # Only allow a trusted parameter "white list" through.
    def message_params
      params.require(:message).permit(:content, :chat_id)
    end
end
