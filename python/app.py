import logging
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from decouple import config

# Create an instance of Flask app
app = Flask(__name__)

# Configure logging
logging.basicConfig(level=logging.INFO)

# Configure the database connection
database_user = config('DATABASE_USER')
database_password = config('DATABASE_PASSWORD')
database_host = config('DATABASE_HOST')
database_port = config('DATABASE_PORT')
database_name = config('DATABASE_NAME')
server_port = config('SERVER_PORT')

# Uncomment the following lines if using SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = f"mysql+pymysql://{database_user}:{database_password}@{database_host}:{database_port}/{database_name}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Create an instance of SQLAlchemy
db = SQLAlchemy(app)

# Function to establish the database connection
def connect_to_database():
    with app.app_context():
        try:
            db.create_all()
            logging.info('Connected to the database.')
        except Exception as e:
            logging.error(f'Error connecting to the database: {e}')

# Call the connect_to_database function to establish the connection
connect_to_database()

# Define a route
@app.route('/')
def hello_world():
    return 'Hello, world! flask app'

@app.route('/auth/signup')
def signup_controller():
    return 'Hello, world! signup route'



if __name__ == '__main__':
    # Start the server
    app.run(host='0.0.0.0', port=int(server_port))
