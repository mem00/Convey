class User < ApplicationRecord
  #from auth lecture  
  has_secure_password
  validates :username, presence: true, uniqueness: true
  validates :phone_number, presence: true, uniqueness: true
  validates :password,
            length: { minimum: 6 },
            if: -> { new_record? || !password.nil? }
end

