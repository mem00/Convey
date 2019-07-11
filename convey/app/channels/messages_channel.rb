class MessagesChannel < ApplicationCable::Channel
  def subscribed
    #https://medium.com/@dakota.lillie/using-action-cable-with-react-c37df065f296
    chat = Chat.find params[:chat]
    stream_for chat
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
