class CreateBarbers < ActiveRecord::Migration[6.1]
  def change
    create_table :barbers do |t|
      t.string :name
      t.string :phone
      t.string :image
      t.integer :experience

      t.timestamps
    end
  end
end
