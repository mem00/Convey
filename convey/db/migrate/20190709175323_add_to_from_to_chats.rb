class AddToFromToChats < ActiveRecord::Migration[5.2]
  def change
    add_column :chats, :to, :bigint
    add_column :chats, :from, :bigint
  end
end
