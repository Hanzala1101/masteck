from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)


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
    return render_template('home.html')

if __name__ == "__main__":
    app.run()