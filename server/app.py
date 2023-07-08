from flask import Flask, jsonify, request
from models import db, Animal, Center, Adoption,User
from flask_migrate import Migrate
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate = Migrate(app, db)
db.init_app(app)


@app.route('/animals', methods=['GET'])
def get_all_animals():
    animals = Animal.query.all()
    animal_list = []
    for animal in animals:
        animal_data = {
            'id': animal.id,
            'name': animal.name,
            'gender': animal.gender,
            'image': animal.image,
            'description': animal.description
        }
        animal_list.append(animal_data)
    return jsonify(animal_list)

@app.route('/animals/<int:animal_id>', methods=['GET'])
def get_animal(animal_id):
    animal = Animal.query.get(animal_id)
    if animal:
        animal_data = {
            'id': animal.id,
            'name': animal.name,
            'gender': animal.gender,
            'image': animal.image,
            'description': animal.description
        }
        return jsonify(animal_data)
    else:
        return jsonify({'error': 'Animal not found'}), 404

@app.route('/animals', methods=['POST'])
def create_animal():
    data = request.get_json()
    name = data.get('name')
    gender = data.get('gender')
    image = data.get('image')
    description = data.get('description')

    new_animal = Animal(name=name, gender=gender, image=image, description=description)
    db.session.add(new_animal)
    db.session.commit()

    return jsonify({'message': 'Animal created successfully'}), 201

@app.route('/animals/<int:animal_id>', methods=['PATCH'])
def update_animal(animal_Id):
    animal = Animal.query.get(animal_Id)
    if animal:
        data = request.get_json()
        animal.name = data.get('name', animal.name)
        animal.gender = data.get('gender', animal.gender)
        animal.image = data.get('image', animal.image)
        animal.description = data.get('description', animal.description)

        db.session.commit()

        return jsonify({'message': 'Animal updated successfully'})
    else:
        return jsonify({'error': 'Animal not found'}), 404

@app.route('/animals/<int:animal_id>', methods=['DELETE'])
def delete_animal(animal_id):
    animal = Animal.query.get(animal_id)
    if animal:
        db.session.delete(animal)
        db.session.commit()
        return jsonify({'message': 'Animal deleted successfully'})
    else:
        return jsonify({'error': 'Animal not found'}), 404

@app.route('/centers', methods=['GET'])
def get_all_centers():
    centers = Center.query.all()
    center_list = []
    for center in centers:
        center_data = {
            'id': center.id,
            'name': center.name,
            'location': center.location
        }
        center_list.append(center_data)
    return jsonify(center_list)

@app.route('/centers', methods=['POST'])
def create_center():
    data = request.get_json()
    name = data.get('name')
    location = data.get('location')

    new_center = Center(name=name, location=location)
    db.session.add(new_center)
    db.session.commit()

    return jsonify({'message': 'Center created successfully'}), 201

@app.route('/adoptions', methods=['GET'])
def get_all_adoptions():
    adoptions =Adoption.query.all()
    adoption_list = []
    for adoption in adoptions:
        adoption_data = {
             
            'adopter_id': adoption.adopter_id,
            'animal_id': adoption.animal_id
        }
        adoption_list.append(adoption_data)
    return jsonify(adoption_list)

@app.route('/adoptions/<int:adoption_id>', methods=['GET'])
def get_adoption(adoption_id):
    adoption = Adoption.query.get(adoption_id)
    if adoption:
        adoption_data = {
            'id': adoption.id,
            'adopter_id': adoption.adopter_id,
            'animal_id': adoption.animal_id
        }
        return jsonify(adoption_data)
    else:
        return jsonify({'error': 'Adoption not found'}), 404

@app.route('/adoptions', methods=['POST'])
def create_adoption():
    data = request.get_json()
    adopter_id = data.get('adopter_id')
    animal_id = data.get('animal_id')

    new_adoption = Adoption(adopter_id=adopter_id, animal_id=animal_id)
    db.session.add(new_adoption)
    db.session.commit()

    return jsonify({'message': 'Adoption created successfully'}), 201

if __name__ == '__main__':
    app.run(port=5000)