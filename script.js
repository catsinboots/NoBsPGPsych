const data = [
  {
    name: "University of Delhi (DU)", course: "MA", specialization: "Clinical, Counselling",
    location: "Delhi, Delhi", process: "CUET-PG", eligibility: "Psychology background preferred/required",
    fees: "10,000–20,000"
  },
  {
    name: "Jawaharlal Nehru University (JNU)", course: "MA", specialization: "General",
    location: "Delhi, Delhi", process: "CUET-PG", eligibility: "Any discipline (preferred Psychology)",
    fees: "12,000–15,000"
  },
  {
    name: "Banaras Hindu University (BHU)", course: "MA/MSc", specialization: "Both",
    location: "Varanasi, UP", process: "CUET-PG", eligibility: "Psychology background required",
    fees: "8,000–15,000"
  },
  {
    name: "University of Hyderabad", course: "MSc", specialization: "General",
    location: "Hyderabad, Telangana", process: "CUET-PG", eligibility: "Any discipline (preferred Psychology)",
    fees: "10,000–15,000"
  },
  {
    name: "Tata Institute of Social Sciences (TISS)", course: "MA", specialization: "Clinical, Counselling",
    location: "Mumbai, Maharashtra", process: "TISSNET", eligibility: "Any discipline + SOP",
    fees: "60,000–100,000"
  }
];

function renderTable(filteredData) {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";
  filteredData.forEach(college => {
    const row = `<tr>
      <td>${college.name}</td>
      <td>${college.course}</td>
      <td>${college.specialization}</td>
      <td>${college.location}</td>
      <td>${college.process}</td>
      <td>${college.eligibility}</td>
      <td>${college.fees}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });
}

function filterTable() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const process = document.getElementById("cuetFilter").value;

  const filtered = data.filter(college => {
    const matchesSearch = Object.values(college).some(val =>
      val.toLowerCase().includes(query)
    );
    const matchesProcess = (process === "All") ||
      (process === "CUET-PG" && college.process === "CUET-PG") ||
      (process === "Non-CUET" && college.process !== "CUET-PG");
    return matchesSearch && matchesProcess;
  });

  renderTable(filtered);
}

// Initial render
window.onload = function() {
  renderTable(data);
}
