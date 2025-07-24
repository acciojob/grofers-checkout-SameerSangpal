const getSumBtn = document.createElement("button");
getSumBtn.id = "sum-btn";
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  const existingTotalRow = document.querySelector(".total-row");
  if (existingTotalRow) existingTotalRow.remove();

  const priceElements = document.querySelectorAll(".price");
  let total = 0;

  priceElements.forEach(cell => {
    const val = parseFloat(cell.textContent.trim());
    if (!isNaN(val)) total += val;
  });

  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");
  totalRow.classList.add("total-row");

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.textContent = "Total Price: ₹" + total;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);

  document.getElementById("ans").textContent = total;
};

getSumBtn.addEventListener("click", getSum);
