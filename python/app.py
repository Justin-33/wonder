import os
from flask import Flask
from flask_mysqldb import MySQL

app = Flask(__name__)
app.config['MYSQL_HOST'] = os.environ.get('DATABASE_HOST', 'db')
app.config['MYSQL_USER'] = os.environ.get('DATABASE_USER', 'root')
app.config['MYSQL_PASSWORD'] = os.environ.get('DATABASE_PASSWORD', 'examplepassword')
app.config['MYSQL_PASSWORD'] = os.environ.get('DATABASE_PORT', '3306')
app.config['PORT'] = os.environ.get('PORT', '5000')


mysql = MySQL(app)

def check_database_connection():
    try:
        cur = mysql.connection.cursor()
        cur.execute("SELECT VERSION()")
        version = cur.fetchone()
        cur.close()
        return f"Connected to MySQL: {version[0]}"
    except Exception as e:
        return f"Failed to connect to the database: {str(e)}"

@app.route('/')
def index():
     check_database_connection()
     return "Hello Wworld"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=app.config['PORT'])
