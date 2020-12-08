# load and evaluate a saved model
from numpy import loadtxt
from tensorflow import keras
from keras.models import load_model
import numpy as np

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
    
    # 6 Predict DR level of image
    def predict(self, image):
        # TODO reshape image

        # TODO predict DR severity level 
        pass

    # 1 Load model
    # 2 Load data
    # TODO 3 Get historical accuracy
    # TODO 4 GET image from FE
    # Should return a matrix representing the image
    # TODO 5 Reshape image (according to Daniel this step can be skipped)
    # TODO 6 Predict stage of DR
    # TODO 7 POST result prediction 

