class User < ApplicationRecord
  has_many :to_chats, :class_name => 'Chat', :foreign_key => 'to_id'
  has_many :from_chats, :class_name => 'Chat', :foreign_key => 'from_id'
  #from auth lecture  
  has_secure_password
  validates :username, presence: true, uniqueness: true
  validates :phone_number, presence: true, uniqueness: true
  validates :password,
            length: { minimum: 6 },
            if: -> { new_record? || !password.nil? }
end

