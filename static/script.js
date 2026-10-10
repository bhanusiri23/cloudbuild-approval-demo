
const statusText = document.getElementById("status");
const stageText = document.getElementById("stage");
const message = document.getElementById("message");

async function refreshStatus() {
  const response = await fetch("/api/status");
  const data = await response.json();

  statusText.textContent = data.status;
  stageText.textContent = data.stage;

  document.getElementById("deployStage").classList.toggle(
    "active", data.status === "Approved"
  );

  document.getElementById("approvalStage").classList.toggle(
    "active", data.status === "Pending"
  );

  document.getElementById("approveBtn").disabled =
    data.status !== "Pending";

  document.getElementById("rejectBtn").disabled =
    data.status !== "Pending";
}

async function decide(decision) {
  try {
    const response = await fetch("/api/approval", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ decision })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Request failed");
    }

    message.textContent = "Decision recorded: " + data.status;
    await refreshStatus();
  } catch (error) {
    message.textContent = "Error: " + error.message;
  }
}

document.getElementById("approveBtn").addEventListener(
  "click", () => decide("approve")
);

document.getElementById("rejectBtn").addEventListener(
  "click", () => decide("reject")
);

refreshStatus();
