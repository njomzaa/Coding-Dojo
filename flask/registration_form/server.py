from flask import Flask, render_template, request, redirect, flash, session
import re
from datetime import datetime, date
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
PASSWORD_REGEX = re.compile(r"(?=.*[A-z])(?=.*[0-9])")


app = Flask(__name__)
app.secret_key = 'KeepItSecretKeepItSafe'


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/success', methods=['POST'])
def success():

 
    if len(request.form['first_name'])<1:
        flash(u"The name field can't be empty!",'error')
    else: session['first_name']=request.form['first_name']

    if len(request.form['last_name'])<1:
        flash(u"The last name field can't be empty!", 'error')
    else: session['last_name']=request.form['last_name']

    if len(request.form['email'])<1:
        flash(u"Email field can't be empty!", 'error')
    elif not EMAIL_REGEX.match(request.form['email']):
        flash(u"Invalid Email Address!",'error')
    else: session['email']=request.form['email']

    if len(request.form['password'])<1:
        flash(u"You must provide password!",'error')
    elif len(request.form['password'])<8:
        flash(u"Password should be longer than 8 characters",'error')
    elif not PASSWORD_REGEX.match(request.form['password']):
        flash(u"Password must be at least one uppercase letter and one number",'error')
    
    if len(request.form['repeatpass'])<1:
        flash(u"Please re-type password!",'error')
    elif len(request.form['repeatpass'])<8:
        flash(u"Password should be longer than 8 characters",'error')

    if request.form['password'] != request.form['repeatpass']:
        flash(u"Passwords didn't match. Please check the password!",'error')


    if request.form['date'] == "":
        flash(u"Please enter your birthday", "error")

    else:

        curr_date = str(date.today())
        birthDate = request.form['date']
        dt = datetime.strptime(curr_date, '%Y-%m-%d')
        d=datetime.strptime(birthDate, '%Y-%m-%d')
        if d > dt:

            flash(u"It looks like you entered the wrong info. Please be sure to use your real birthday.","error")

        
 
    if '_flashes' in session.keys():
        return redirect("/")

    else:
        return render_template("success.html")


if __name__=="__main__":
    # run our server
    app.run(debug=True) 
