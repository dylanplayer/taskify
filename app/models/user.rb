class User < ApplicationRecord
  has_many :tasks

  validates :google_id, uniqueness: true
  validates :email, uniqueness: true
end
