class RemoveFromToFromChats < ActiveRecord::Migration[5.2]
  def change
    remove_column :chats, :to, :bigint
    remove_column :chats, :from, :bigint
  end
end
