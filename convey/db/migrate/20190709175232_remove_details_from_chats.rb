class RemoveDetailsFromChats < ActiveRecord::Migration[5.2]
  def change
    remove_column :chats, :title, :string
    remove_column :chats, :user_id, :bigint
    remove_column :chats, :to, :integer
    remove_column :chats, :from, :integer
  end
end
