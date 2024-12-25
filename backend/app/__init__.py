from flask import Flask
from .database import db
from flask_jwt_extended import JWTManager
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

def create_app():
    # Create the Flask app
    app = Flask(__name__)

    # Check if the environment variables are being loaded correctly
    print("DB URI:", os.getenv('DB_URI'))

    # Set app configuration from environment variables
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DB_URI')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Initialize database and JWTManager
    db.init_app(app)
    jwt = JWTManager(app)

    # Register Blueprints
    from .routes import routes
    from .auth import auth
    app.register_blueprint(routes)
    app.register_blueprint(auth)

    return app
