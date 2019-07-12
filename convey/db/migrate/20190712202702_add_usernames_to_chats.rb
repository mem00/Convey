class AddUsernamesToChats < ActiveRecord::Migration[5.2]
  def change
    add_column :chats, :from_username, :string
    add_column :chats, :to_username, :string
  end
end
