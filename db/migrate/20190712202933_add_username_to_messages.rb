class AddUsernameToMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :from_username, :string
  end
end
