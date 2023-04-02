from flask import Flask, render_template, request, redirect, url_for, flash
from model import model_fun
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///userId.db'
app.config['SECRET_KEY'] = 'userId'
db = SQLAlchemy(app)

app.app_context().push()

class UserId(db.Model, UserMixin):
    number = db.Column(db.Integer, primary_key=True)
    id = db.Column(db.Integer)
    name = db.Column(db.String(100))



@app.route('/',methods=['GET','POST'])
def index():
    if request.method == "GET":
        return render_template('register.html')
    else:
        return redirect('/login')


@app.route('/login',methods=['GET','POST'])
def login():
    if request.method == "GET":
        return render_template('login.html')
    else:
        return redirect('/home')


@app.route('/home')
def home():
    predict = model_fun()
    person_metadata = UserId.query.filter_by(id=predict)
    return render_template('home.html',person_metadata=person_metadata[0].name)

if __name__ == "__main__":
    app.run(debug=True)