import flask, flask.views
import json
import os

from flask import Flask, flash, redirect, render_template, \
     request, url_for


app = flask.Flask(__name__)

app.secret_key = "starcraft"


class Main(flask.views.MethodView):
    def get(self):
        return flask.render_template('index.html')
    def post(self):
        return flask.request.form['expression']

class Projects(flask.views.MethodView):
    def get(self):
        return flask.render_template('projects.html')

app.add_url_rule('/',
    view_func=Main.as_view('index'),
    methods=['GET','POST'])

app.add_url_rule('/',
    view_func=Projects.as_view('projects'),
    methods=['GET'])


@app.route('/about', methods=['GET', 'POST'])
def about():
    if request.method == 'GET':
        return render_template('about.html')

@app.route('/code', methods=['GET', 'POST'])
def code():
    if request.method == 'GET':
        return render_template('code.html')

@app.route('/test', methods=['GET', 'POST'])
def test():
    if request.method == 'GET':
        flash('Example of Flashing')
        flash('Example of Flashing 2')
        return render_template('test.html')



#app.debug = True
#app.run()

