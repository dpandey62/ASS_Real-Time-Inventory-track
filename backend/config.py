import pymysql
pymysql.install_as_MySQLdb()

class Config:
    SQLALCHEMY_DATABASE_URI = "mysql+pymysql://root:6200693922@localhost/inventory_db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False