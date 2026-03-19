from marshmallow import Schema, fields, validate

class InventorySchema(Schema):
    name = fields.String(required=True)
    quantity = fields.Integer(required=True, validate=validate.Range(min=0))

class TaskSchema(Schema):
    title = fields.String(required=True)

class TaskItemSchema(Schema):
    task_id = fields.Integer(required=True)
    inventory_id = fields.Integer(required=True)
    required_qty = fields.Integer(required=True, validate=validate.Range(min=1))