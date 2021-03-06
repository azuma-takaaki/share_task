class User < ApplicationRecord


  has_many :group_users
  has_many :groups, through: :group_users


  validates :name, presence: true
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email, presence: true, length: {maximum: 255},
            format: { with: VALID_EMAIL_REGEX }, uniqueness:true
  validates :password, length: { minimum: 6}, confirmation: true, on: :create
  has_secure_password
end
