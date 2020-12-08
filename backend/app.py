# The save technique is from https://flask.palletsprojects.com/en/1.1.x/patterns/fileuploads/
import os
from flask import Flask, flash, request, redirect, url_for, session
from flask_cors import CORS, cross_origin
from werkzeug import secure_filename
# If werkzeug gives an issue, do: pip install werkzeug==0.16.1

# Set upload parameters
UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Initialize app
app = Flask(__name__)
# app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy   dog'
# app.config['CORS_HEADERS'] = 'Content-Type'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
cors = CORS(app, resources={r"/upload": {"origins": "http://localhost:3000"}})

# General doc in case someone peeks
@app.route('/')
def backend():
    return 'This is where the backend works.'

# Connect to the API
@app.route('/predictor')
def predictor():
    # TODO connect this to the predictor doc
    return {'prediction': 0.82}

# Upload image(s)
@app.route('/upload', methods=['POST', 'GET'])
@cross_origin(allow_headers=['*'])
def fileUpload():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']

        # if the user does not select file, ask again
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        
        # save the file
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            # TODO concat RIGHT and LEFT to filenames (and expand to allow 2 uploads)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            # TODO return this URL to the FE 
            # return redirect(url_for('uploaded_file', filename=filename))
        return 'Image successfully uploaded.'
    else:
        file = request.args.get('file')
        return 'Image successfully retrieved.'


if __name__ == "__main__":
    # app.secret_key = os.urandom(24)
    app.run()