from flask import Flask, jsonify
import kagglehub
from kagglehub import KaggleDatasetAdapter
import pandas as pd

app = Flask(__name__)

# Load Kaggle dataset
file_path = "traffic.csv"  # Change as needed

try:
    df = kagglehub.load_dataset(
        KaggleDatasetAdapter.PANDAS,
        "fedesoriano/traffic-prediction-dataset",
        file_path
    )
    print(" Kaggle dataset loaded: {len(df)} rows found")
except Exception as e:
    print(" Error loading Kaggle dataset: {e}")
    df = None  # Set to None if loading fails

# Home route
@app.route('/TrafficPredict')
def home():
    return " Flask server is running!"

# Route to return traffic data from Kaggle dataset
@app.route('/api/traffic-data', methods=['GET'])
def get_traffic_data():
    if df is None:
        return jsonify({"error": "Dataset not found"}), 500

    return jsonify(df.head(10).to_dict(orient="records"))  # Return first 10 rows

if __name__ == '__main__':
    app.run(debug=True, port=5000)
