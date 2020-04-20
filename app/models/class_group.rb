#frozen_string_literal: true

class ClassGroup < ApplicationRecord
    has_many :students
end