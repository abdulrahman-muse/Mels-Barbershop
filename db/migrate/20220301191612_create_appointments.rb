class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.string :service
      t.date :date
      t.string :time
      t.integer :user_id
      t.integer :barber_id

      t.timestamps
    end
  end
end
