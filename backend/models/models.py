from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# ---------------- TASK MODEL ---------------- #
class Task(db.Model):
    __tablename__ = "tasks"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    status = db.Column(db.String(50), default="Pending")

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "status": self.status
        }


# ---------------- INVENTORY MODEL ---------------- #
class Inventory(db.Model):
    __tablename__ = "inventory"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    quantity = db.Column(db.Integer, default=0)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "quantity": self.quantity
        }