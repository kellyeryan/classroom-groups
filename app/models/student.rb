#frozen_string_literal: true

class Student < ApplicationRecord
    belongs_to: teacher
    belongs_to: classroom
end