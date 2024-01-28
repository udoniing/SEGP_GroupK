from flask import Flask, render_template

app = Flask(__name__, static_url_path='/static')

@app.route('/')
def home():
    return render_template('testsegp.html')

@app.route('/testsegp2')
def page2():
    return render_template('testsegp2.html')

@app.route('/loginpage')
def login():
    return render_template('loginpage.html')

@app.route('/signup')
def login():
    return render_template('register.html')

if __name__ == '__main__':
    app.run(port=5000)