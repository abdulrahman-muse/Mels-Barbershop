class RemoveAboutFromServices < ActiveRecord::Migration[6.1]
  def change
    remove_column :services, :about, :string
  end
end
