from flask import jsonify

# Define a route
@app.route('/')
def hello_world():
    response = jsonify({'Status': 'OK'})
    response.status_code = 200
    return response

@app.route('/auth/signup',)
def signup():
    response = jsonify({'Status': 'OK'})
    response.status_code = 200
    return response

@app.route('/auth/signin')
def signin():
    response = jsonify({'Status': 'OK'})
    response.status_code = 200
    return response

@app.route('/auth/password/reset',methods=['PATCH'])
def password_reset():
    response = jsonify({'Status': 'OK'})
    response.status_code = 200
    return response

@app.route('/auth/password/change')
def pasword_change():
    response = jsonify({'Status': 'OK'})
    response.status_code = 200
    return response
