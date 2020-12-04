# load and evaluate a saved model
from numpy import loadtxt
from tensorflow import keras
from keras.models import load_model

class DR_api:
    def __init__(self):
        # load the model
        self.model = load_model('model.h5')
        # (optional line) summarize model
        self.model.summary()

    #     # TODO load dataset
    #     dataset = loadtxt("pima-indians-diabetes.csv", delimiter=",")
    #     # split into input (X) and output (Y) variables
    #     X = dataset[:,0:8]
    #     Y = dataset[:,8]
   
    #     # evaluate the model
    #     self.score = model.evaluate(X, Y, verbose=0)

    # # Return the historical accuracy
    # def get_accuracy(self):
    #     return print("%s: %.2f%%" % (self.model.metrics_names[1], self.score[1]*100))
    
    # Predict DR level of image
    def predict(self, image):
        # TODO reshape image

        # TODO predict DR severity level 
        pass