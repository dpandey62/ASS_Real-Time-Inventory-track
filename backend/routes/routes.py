from flask import Blueprint, request, jsonify
from services.services import *

api = Blueprint("api", __name__)

# ---------------- HOME ---------------- #
@api.route("/")
def home():
    return {"message": "API running 🚀"}

# ---------------- TASK ---------------- #
@api.route("/tasks", methods=["GET"])
def all_tasks():
    return jsonify(get_tasks())


@api.route("/tasks", methods=["POST"])
def create_task():
    data = request.json
    add_task(data["title"])
    return {"message": "Task added"}


@api.route("/tasks/<int:id>", methods=["DELETE"])
def remove_task(id):
    delete_task(id)
    return {"message": "Task deleted"}


@api.route("/tasks/<int:id>/complete", methods=["POST"])
def complete(id):
    complete_task(id)
    return {"message": "Task completed"}


# ---------------- INVENTORY ---------------- #
@api.route("/inventory", methods=["GET"])
def all_items():
    return jsonify(get_items())


@api.route("/inventory", methods=["POST"])
def create_item():
    data = request.json
    add_item(data["name"], int(data["quantity"]))
    return {"message": "Item added"}


@api.route("/inventory/<int:id>", methods=["DELETE"])
def remove_item(id):
    delete_item(id)
    return {"message": "Item deleted"}


@api.route("/inventory/<int:id>/update", methods=["POST"])
def update_item(id):
    value = int(request.json.get("value"))
    update_quantity(id, value)
    return {"message": "Updated"}