class MessagesChannel < ApplicationCable::Channel
  def subscribed
    #https://medium.com/@dakota.lillie/using-action-cable-with-react-c37df065f296
    conversation = Conversation.find params[:conversation]
    stream_for conversation
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
