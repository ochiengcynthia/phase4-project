from faker import Faker
from models import db, User, Center, Animal, Adoption
from random import randint, choice
from server.app import app
import random
import json

fake = Faker()
with app.app_context():

    adoption_data = []

for _ in range(10):
    adoption = {
        'adopter_id': fake.random_int(min=1, max=10),
        'animal_id': fake.random_int(min=1, max=10),
    }
    adoption_data.append(adoption)

adoption_data_json = json.dumps(adoption_data, indent=4)
print(adoption_data_json)
    # user=[]

    # for i in range(10):
    #     name = fake.name()
    #     age = randint(18, 60)
    #     password = fake.password()
    #     email = fake.email()
    #     user = User(name=name, age=age, password=password, email=email)
    #     db.session.add(user)
    # # db.session.commit()
    # center=[]
    # for i in range(10):
    #     name = fake.company()
    #     location = fake.address()
    #     center = Center(name=name, location=location)
    #     db.session.add(center)
    # db.session.commit()

    # animal=[]
    # for i in range(10):
    #     name = fake.first_name()
    #     gender = choice(['M', 'F'])
    #     image = fake.image_url()
    #     description = fake.text()
    #     animal = Animal(name=name, gender=gender, image=image, description=description)
    #     db.session.add(animal)
    # db.session.commit()
    # adoption=[]
    # for i in range(10):
    #     adopter_id = random.randint(1,10)
    #     animal_id = random.randint(1, 10)
    #     new_adoption = Adoption(adopter_id=adopter_id, animal_id=animal_id)
    #     db.session.add(new_adoption)


    # adoption=[]
    # for i in range(10):
    #     adopter_id = random.randint(1,10)
    #     animal_id = random.randint(1,10)
    #     # adoption = Adoption(adopter=name, animal=animal)
    #     db.session.add(adoption)
    # db.session.commit()

# if __name__ == '__main__':
#     db.drop_all()
#     db.create_all()
#     num_users = 10
#     num_centers = 5
#     num_animals = 20
#     num_adoptions = 15
#     seed_users(num_users)
#     seed_centers(num_centers)
#     seed_animals(num_animals)
#     seed_adoptions(num_adoptions)
#     print('Database seeded successfully.')
