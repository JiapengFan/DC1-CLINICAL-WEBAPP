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

# Save files
file_links = []
def handle_file(f):
    if not allowed_file(f.filename):
        return

    filename = secure_filename(f.filename)
    file_link = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    
    file_links.append(file_link)

    f.save(file_link)

# Initialize app
app = Flask(__name__)
app.config['SECRET_KEY'] = "vm$wZ%dh9H/A8~ltuPLLlKSpmVD"
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
@app.route('/upload', methods=['POST'])
@cross_origin(allow_headers=['*'])
def fileUpload():
    # Delete contents if the directory is not empty (very hacky)
    if len(os.listdir(UPLOAD_FOLDER) ) > 0:
        file_list = [ os.path.join(UPLOAD_FOLDER,f) for f in os.listdir(UPLOAD_FOLDER) if os.path.isfile(os.path.join(UPLOAD_FOLDER,f)) ]
        # for filepath in directory path
        for file_path in file_list:
            os.remove(file_path)

    if request.method == 'POST':
        files = request.files.getlist('file[]')
    else:
        files = request.args.get('file[]')
        
    # Only accept 2 files
    i = 0
    for file in files:
        if i < 2: handle_file(file)
        else: break
        i = i + 1

    # TODO return file_links to the FE 

    # TODO link this to the results page
    return "Files successfully uploaded."


if __name__ == "__main__":
    app.run()