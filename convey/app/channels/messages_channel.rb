class MessagesChannel < ApplicationCable::Channel
  def subscribed
    #https://medium.com/@dakota.lillie/using-action-cable-with-react-c37df065f296
    # chat = Chat.find params[:chat]
    stream_from "messages_#{params[:to_id]}_#{params[:from_id]}"

  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
