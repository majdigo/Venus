const payload = {
    intervention: "rhinoplastie",
    firstName: "Test",
    lastName: "User",
    age: 30,
    gender: "male",
    country: "France",
    phone: "0600000000",
    email: "test@example.com",
    message: "Test lead from E2E script",
    preferredContact: "email",
    consentMarketing: true,
    faceIssues: ["Bosse nasale"]
};

fetch("http://localhost:3000/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
})
    .then(res => res.json())
    .then(console.log)
    .catch(console.error);
