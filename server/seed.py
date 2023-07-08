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
    