class AddReferncesToChats < ActiveRecord::Migration[5.2]
  def change
    add_reference :chats, :to
    add_reference :chats, :from
  end
end
