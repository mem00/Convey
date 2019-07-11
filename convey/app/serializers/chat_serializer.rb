class ChatSerializer < ActiveModel::Serializer
  attributes :id, :to_id, :from_id
  has_many :messages
end
