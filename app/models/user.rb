#frozen_string_literal: true

class User < ApplicationRecord
    has_many :class_groups
    has_many :students, through: :class_groups
end