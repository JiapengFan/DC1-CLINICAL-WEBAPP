# got from ____ website
import os
from flask import Flask, flash, request, redirect, url_for, session
from flask_cors import CORS, cross_origin
from werkzeug import secure_filename
# If werkzeug gives an issue, do: pip install werkzeug==0.16.1

# UPLOAD_FOLDER = 'upload'
# ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

app = Flask(__name__)
# app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy   dog'
# app.config['CORS_HEADERS'] = 'Content-Type'
# app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
cors = CORS(app, resources={r"/upload": {"origins": "http://localhost:3000"}})

@app.route('/')
def backend():
    return 'This is where the backend works.'

@app.route('/predictor')
def predictor():
    # TODO connect this to the predictor doc
    return {'prediction': 0.82}


@app.route('/upload', methods=['POST', 'GET'])
@cross_origin(allow_headers=['*'])
def fileUpload():
    if request.method == 'POST':
        print ("Method is POST")
        image = request.files['file']
        print ("Image successfully uploaded.")
        # Should return a matrix representing the image
        image.save(secure_filename(image.filename))
        return image
    else:
        print("Method is GET")
        image = request.args.get('file')
        return image


if __name__ == "__main__":
    # app.secret_key = os.urandom(24)
    app.run()