from flask import Flask, render_template, jsonify

app = Flask(__name__, static_url_path="/static")


@app.route("/")
def root():
    return render_template("index.html")


@app.route("/data")
def data():
    return jsonify(["here", "is", "some", "data"])
