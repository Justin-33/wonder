from flask import jsonify


def signup(health):
    response = jsonify({'Status': 'OK'})
    response.status_code = 200
    return response

def signin(health):
    response = jsonify({'Status': 'OK'})
    response.status_code = 200
    return response

def password_reset(health):
    response = jsonify({'Status': 'OK'})
    response.status_code = 200
    return response


def pasword_change(health):
    response = jsonify({'Status': 'OK'})
    response.status_code = 200
    return response

def authenticate_user(health):
    response = jsonify({'Status': 'OK'})
    response.status_code = 200
    return response

def update_user(health):
    response = jsonify({'Status': 'OK'})
    response.status_code = 200
    return response