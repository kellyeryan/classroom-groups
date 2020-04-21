#frozen_string_literal: true

class ClassGroup < ApplicationRecord
    belongs_to :user
    has_many :students
end