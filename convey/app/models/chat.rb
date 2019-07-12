class Chat < ApplicationRecord
  belongs_to :to, :class_name => 'User'
  belongs_to :from, :class_name => 'User'
  has_many :messages, dependent: :delete_all
end
