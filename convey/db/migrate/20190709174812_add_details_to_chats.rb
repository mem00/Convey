class AddDetailsToChats < ActiveRecord::Migration[5.2]
  def change
    add_column :chats, :to, :integer
    add_column :chats, :from, :integer
  end
end
