#frozen_string_literal: true

class Classname < ApplicationRecord
    belongs_to :teacher
    belongs_to :student
end