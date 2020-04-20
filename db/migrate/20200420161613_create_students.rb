class CreateStudents < ActiveRecord::Migration[6.0]
  def change
    create_table :students do |t|
      t.string :name
      t.belongs_to :class_group
      t.timestamps
    end
  end
end
