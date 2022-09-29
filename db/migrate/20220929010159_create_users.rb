class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :google_id
      t.index :google_id
      t.string :email
      t.index :email
      t.string :avatar_url
      t.string :given_name
      t.string :family_name
      
      t.timestamps
    end
  end
end
