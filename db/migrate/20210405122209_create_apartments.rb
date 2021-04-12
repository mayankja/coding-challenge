class CreateApartments < ActiveRecord::Migration[6.1]
  def change
    create_table :apartments do |t|
      t.string :title
      t.decimal :price, precision: 8, scale: 2, default: 0
      t.float :sqm, default: 0
      t.integer :total_bedroom, default: 0
      t.integer :total_bathroom, default: 0
      t.string :picture

      t.timestamps
    end
  end
end
