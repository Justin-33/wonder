from flask import jsonify


def signup():
    response = jsonify({
        'success': True,
        "successful":"signup successful" 
        })
    response.status_code = 200
    return response

def signin():
    response = jsonify({
        'success': True,
        "successful":"signin is successful" 
        })
    response.status_code = 200
    return response

def password_reset():
    response = jsonify({
        'success': True,
        "successful":"reset password is successful" 
        })
    response.status_code = 200
    return response


def pasword_change():
    response = jsonify({
        'success': True,
        "successful":"change password successful" 
        })
    response.status_code = 200
    return response

def authenticate_user():
    response = jsonify({
        'success': True,
        "successful":"authentication is successful" 
        })
    response.status_code = 200
    return response

def update_user():
    response = jsonify({
        'success': True,
        "successful":"update successful" 
        })
    response.status_code = 200
    return response