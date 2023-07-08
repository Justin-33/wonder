import logging
import time
from flask import Flask,jsonify
from flask_sqlalchemy import SQLAlchemy
from decouple import config
from sqlalchemy_utils import create_database, database_exists
from middleware import middleware_signup
from controller import signin,signup,pasword_change,update_user,authenticate_user,password_reset

# Create an instance of Flask app
app = Flask(__name__)
# config.encoding = 'cp1251'
# Configure logging
logging.basicConfig(level=logging.INFO)

#Configure the database connection
database_user = config('DATABASE_USER')
database_password = config('DATABASE_PASSWORD')
database_host = config('DATABASE_HOST')
database_port = int(config('DATABASE_PORT'))
database_name = config('DATABASE_NAME')
server_port = config('SERVER_PORT')

# database_user = "root"
# database_password = "examplepassword"
# database_host = 3306
# database_port = 3306
# database_name = "mysqldb"
# server_port = "5001"

# Print the database details
logging.info(f'Database details:')
logging.info(f'  Host: {database_host}')
logging.info(f'  Port: {database_port}')
logging.info(f'  Name: {database_name}')
logging.info(f'  User: {database_user}')
logging.info(f'  password: {database_password}')

# Configure the Flask app with SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = f"mysql+pymysql://{database_user}:{database_password}@{database_host}:{database_port}/{database_name}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Create an instance of SQLAlchemy
db = SQLAlchemy(app)

# Function to establish the database connection
def connect_to_database():
    retries = 0
    max_retries = 10
    connected = False

    with app.app_context():
        while retries < max_retries:
            try:
                # if not database_exists(f"mysql+pymysql://{database_user}:{database_password}@{database_host}:{database_port}/{database_name}"):
                #     create_database(f"mysql+pymysql://{database_user}:{database_password}@{database_host}:{database_port}")
                #     logging.info(f'Created database: {database_name}')
                
                db.create_all()
                logging.info('Connected to the database.')
                connected = True
                break
            except Exception as e:
                logging.error(f'Error connecting to the database: {e}')
                retries += 1
                logging.info(f'Retrying in 10 seconds...')
                time.sleep(10)

        if not connected:
            logging.error('Failed to connect to the database. Exiting...')
            exit(1)

# Call the connect_to_database function to establish the connection
connect_to_database()

@app.before_request
def validate_signup():
    if signin:
        try:
            middleware_signup()
        except:
            if middleware_signup() == False:
                response = jsonify({
        "unsuccessful":"invalid input, sign up not successful" 
        })
            response.status_code = 401
            return response
                





# Define a route
app.add_url_rule("/auth/signup",  "signup", signup, methods=["POST"])
app.add_url_rule("/auth/signin", "signin", signin, methods=["POST"])
app.add_url_rule("/auth/password/change", "password_change", pasword_change, methods=["POST"])
app.add_url_rule("/auth/password/reset", "password_reset", password_reset, methods=["POST"])
app.add_url_rule("/me", "authenticate_user", authenticate_user)
app.add_url_rule("/me", "updated_user", update_user, methods=["PATCH"])



if __name__ == '__main__':
    # Start the server
    app.run(host='0.0.0.0', port=int(server_port))
