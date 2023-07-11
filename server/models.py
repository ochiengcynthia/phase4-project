from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

db = SQLAlchemy()
ma = Marshmallow()

class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    age = db.Column(db.Integer)
    password = db.Column(db.String(100))
    email = db.Column(db.String(100), unique=True)

    adoptions = db.relationship('Adoption', backref='adopter', lazy=True)

    def __repr__(self):
        return self.name

class Center(db.Model):
    __tablename__ = "center"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    location = db.Column(db.String(100))

    def __repr__(self):
        return self.name

class Animal(db.Model):
    __tablename__ = "animal"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    gender = db.Column(db.String(10))
    image = db.Column(db.String(100))
    description = db.Column(db.Text)

    adoptions = db.relationship('Adoption', backref='animal', lazy=True)

    def __repr__(self):
        return self.name

class Adoption(db.Model):
    __tablename__ = "adoption"
    id = db.Column(db.Integer, primary_key=True)
    adopter_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    animal_id = db.Column(db.Integer, db.ForeignKey('animal.id'))

    def __repr__(self):
        return f'{self.adopter.name} adopted {self.animal.name}'

# class UserSchema(ma.SQLAlchemyAutoSchema):
#     class Meta:
#         model = User

# class CenterSchema(ma.SQLAlchemyAutoSchema):
#     class Meta:
#         model = Center

# class AnimalSchema(ma.SQLAlchemyAutoSchema):
#     class Meta:
#         model = Animal

# class AdoptionSchema(ma.SQLAlchemyAutoSchema):
#     class Meta:
#         model = Adoption

# user_schema = UserSchema()
# center_schema = CenterSchema()
# animal_schema = AnimalSchema()
# adoption_schema = AdoptionSchema()
