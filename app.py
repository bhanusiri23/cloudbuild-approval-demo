
from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

pipeline = {
    "status": "Pending",
    "stage": "Waiting for approval"
}

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/api/status")
def get_status():
    return jsonify(pipeline)

@app.route("/api/approval", methods=["POST"])
def approval():
    data = request.get_json(silent=True) or {}
    decision = data.get("decision")

    if decision not in ["approve", "reject"]:
        return jsonify({"message": "Invalid decision"}), 400

    if decision == "approve":
        pipeline["status"] = "Approved"
        pipeline["stage"] = "Ready for deployment"
    else:
        pipeline["status"] = "Rejected"
        pipeline["stage"] = "Deployment blocked"

    return jsonify(pipeline)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)
