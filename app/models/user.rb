class User < ApplicationRecord
  validates_uniqueness_of :username

  def self.generate
    name = ["João", "José", "Maria", "Carlos", "Mateus", "Vitor", "Pelé"]
    surname = ["Feitosa", "Ferreira", "Costa", "Silva", "Barbosa", "Oliveira"]
    number = rand.to_s[2..4]
    user_name = "#{name.sample}_#{surname.sample}##{number}"
    create(username: user_name)
  end
end
