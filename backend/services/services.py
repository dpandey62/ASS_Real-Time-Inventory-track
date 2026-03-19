from models.models import db, Task, Inventory

# -------- TASK -------- #

def get_tasks():
    return [t.to_dict() for t in Task.query.all()]


def add_task(title):
    task = Task(title=title)
    db.session.add(task)
    db.session.commit()


def delete_task(id):
    task = Task.query.get(id)
    if task:
        db.session.delete(task)
        db.session.commit()


def complete_task(id):
    task = Task.query.get(id)
    if task:
        task.status = "Done"
        db.session.commit()


# -------- INVENTORY -------- #

def get_items():
    return [i.to_dict() for i in Inventory.query.all()]


def add_item(name, quantity):
    item = Inventory(name=name, quantity=quantity)
    db.session.add(item)
    db.session.commit()


def delete_item(id):
    item = Inventory.query.get(id)
    if item:
        db.session.delete(item)
        db.session.commit()


def update_quantity(id, value):
    item = Inventory.query.get(id)
    if item:
        item.quantity += value
        db.session.commit()