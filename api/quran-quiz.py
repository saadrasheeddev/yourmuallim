from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
import random

app = Flask(__name__)
CORS(app)

@app.route('/get_random_ayah', methods=['GET'])
def get_random_ayah():
    df = pd.read_csv("ayah_list.csv")
    ayah_list = list(df)
    random_number = random.randint(0, len(ayah_list) - 1)
    selected_ayah = ayah_list[random_number]
    return jsonify({"selected_ayah": selected_ayah.split(" ")})

if __name__ == '__main__':
    app.run(debug=True)
