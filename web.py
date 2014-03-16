import flask, flask.views
import json
import facebook  # pip install facebook-sdk, not facebook

app = flask.Flask(__name__)

app.secret_key = "starcraft"



ACCESS_TOKEN = 'CAACEdEose0cBAIJRA2sY8G0GZBmiZBXpAXrsahK24ZAEu7QicsO2VGxywdeJkjOjT9rk5vNqURFyiRWZAzylIoPnZAKZBZB6ucVZAckqAD7jEH5AsXH4ZBUAvPjP4gxnENphcdYJZBtGEPC7VbtAOUyLdZBnKANcDsSrotJV336GV1ZBQRBy8J9EuHuEgiJ2CmuZAMJYZD'

SEARCH_LIMIT = 500  # facebook allows 500 max


class Main(flask.views.MethodView):
    def get(self):

        def pp(o):
            '''
            A helper function to pretty-print Python objects as JSON
            '''
            print json.dumps(o, indent=2)


        g = facebook.GraphAPI(ACCESS_TOKEN)
        
        cal_cs_id = '266736903421190'
        cal_cs_feed = g.get_connections(cal_cs_id, 'feed', limit=SEARCH_LIMIT)['data']
        test = g.get_object("me")
        result = api("me/feed")
        
        print test
        #pp(cal_cs_feed[15])
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

app.debug = True
app.run()

