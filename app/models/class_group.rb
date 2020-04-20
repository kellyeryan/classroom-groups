#frozen_string_literal: true

class ClassGroup < ApplicationRecord
    belongs_to :teacher
    has_many :students
end