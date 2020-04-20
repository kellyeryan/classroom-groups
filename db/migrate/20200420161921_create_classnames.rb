class CreateClassnames < ActiveRecord::Migration[6.0]
  def change
    create_table :classnames do |t|
      t.string :name
      t.belongs_to :teacher
      t.belongs_to :student
      t.timestamps
    end
  end
end
