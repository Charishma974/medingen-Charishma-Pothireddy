from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from datetime import timedelta

auth = Blueprint('auth', __name__)

# Dummy user credentials for authentication
USERS = {
    "admin": "password"
}

@auth.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if username in USERS and USERS[username] == password:
        token = create_access_token(identity=username, expires_delta=timedelta(hours=1))
        return jsonify({"token": token}), 200

    return jsonify({"message": "Invalid credentials"}), 401
