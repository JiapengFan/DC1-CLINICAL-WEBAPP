# load and evaluate a saved model
import os
import numpy as np
from numpy import loadtxt
import tensorflow as tf
from tensorflow import keras
from keras.models import load_model
from keras.preprocessing import image

class Predictor_API:
    def __init__(self):
        # 1 load model
        self.model = load_model('model.h5')
        # (optional line) summarize model
        self.model.summary()

    # 2 load dataset
    # def read_train_data():
    #     data = np.load("trainDataSmall.npz")
    #     X_train = data["X_train"]
    #     Y_train = data["Y_train"]
    #     return [X_train, Y_train]

    # def read_test_data():
    #     data = np.load("testDataSmall.npz")
    #     X_test = data["X_test"]
    #     Y_test = data["Y_test"]
    #     return [X_test, Y_test]   
    #     # evaluate the model
    #     self.score = model.evaluate(X, Y, verbose=0)

    # # Return the historical accuracy
    # def get_accuracy(self):
    #     return print("%s: %.2f%%" % (self.model.metrics_names[1], self.score[1]*100))
    
    def get_pics(self, img_dir):
        model = self.model 
        dim0 = len(os.listdir(img_dir))
        dim1 = model.layers[0].input_shape[1]
        dim2 = model.layers[0].input_shape[2]
        dim3 = model.layers[0].input_shape[3]

        # set up empty batch holder
        batch_holder = np.zeros((dim0, dim1, dim2, dim3))

        # upload images from path to batch (with correct shape)
        for i,img in enumerate(os.listdir(img_dir)):
            img = image.load_img(os.path.join(img_dir,img), target_size=(IMG_SIZE,IMG_SIZE))
            batch_holder[i, :] = img

        return batch_holder

    # Get predictions of each image in the folder
    def get_predictions(self):
        batch = get_pics('uploads/')
        predictions = model.predict_classes(batch)
        return predictions
        




# Load model 
# Load pics
# Predict pic
# FUNCT return predictions

    # 1 Load model
    # 2 Load data
    # TODO 3 Get historical accuracy
    # TODO 4 GET image from FE
    # Should return a matrix representing the image
    # TODO 5 Reshape image (according to Daniel this step can be skipped)
    # TODO 6 Predict stage of DR
    # TODO 7 POST result prediction 

