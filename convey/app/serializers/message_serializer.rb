class MessageSerializer < ActiveModel::Serializer
  attributes :id, :chat_id, :content, :created_at, :from_username
end
