class ChatSerializer < ActiveModel::Serializer
  attributes :id, :to_id, :from_id, :from_username, :to_username
  has_many :messages
end
