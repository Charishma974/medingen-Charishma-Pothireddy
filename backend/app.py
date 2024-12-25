from flask import Flask
from flask_cors import CORS
from app import create_app
from app.database import db
# from app.models import Medicine, FAQ, Review, SideEffect

# Create Flask app instance
app = create_app()

# Enable CORS for all routes
CORS(app,origins=["http://localhost:3000"])
  # Allow only your React frontend's origin

# Enable debugging
app.config['DEBUG'] = True

# Create DB Tables if they don't exist
with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)
