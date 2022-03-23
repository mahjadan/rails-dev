class AddUserFieldToTask < ActiveRecord::Migration[7.0]
  def change
    add_column :tasks, :user, :string, limit: 200
  end
end
