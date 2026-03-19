from flask import Flask
from flask_cors import CORS
from config import Config
from models.models import db
from routes.routes import api

app = Flask(__name__)
app.config.from_object(Config)

CORS(app)

# Initialize DB
db.init_app(app)

# Register routes
app.register_blueprint(api)

# Create tables (IMPORTANT)
with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)