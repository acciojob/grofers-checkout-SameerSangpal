const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const existingTotalRow = document.querySelector(".total-row");
	if(existingTotalRow){
		existingTotalRow.remove();
	}

	const priceElements = document.querySelectorAll(".prices");
	let total = 0;

	priceElements.forEach((cell) => {
		total += parseFloat(cell.textContent);
	});

	const table = document.querySelector("table");
	const totalRow = document.createElement("tr");
	totalRow.classList.add("total-row");

	const totalCell = document.createElement("td");
	totalCell.colSpan = 2;
	totalCell.textContent = "Total Price: ₹" + total;

	totalRow.appendChild(totalCell);
	table.appendChild(totalRow);
};
getSumBtn.addEventListener("click", getSum);