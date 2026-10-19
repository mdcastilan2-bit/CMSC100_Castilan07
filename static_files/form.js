
const foodForm = document.getElementById("food-form");
const foodCards = document.getElementById("food-cards");

const foodNameInput = document.getElementById("food-name");
const descriptionInput = document.getElementById("food-description");
const imageUrlInput = document.getElementById("food-image");
const rankInput = document.getElementById("food-rank");

// Handle form submissions.
foodForm.addEventListener("submit", function (event) {
    // Prevent the browser from reloading the page.
    event.preventDefault();

    // Read and clean the input values.
    const foodName = foodNameInput.value.trim();
    const description = descriptionInput.value.trim();
    const imageUrl = imageUrlInput.value.trim();
    const rankText = rankInput.value.trim();
    const rank = Number(rankText);

    // Check that every field contains a value.
    if (
        foodName === "" ||
        description === "" ||
        imageUrl === "" ||
        rankText === ""
    ) {
        alert("Please fill in all fields.");
        return;
    }

    // Ranks must be positive whole numbers.
    if (!Number.isInteger(rank) || rank < 1) {
        alert("Rank must be a positive whole number.");
        return;
    }

    // Check that the image URL is valid and uses HTTP or HTTPS.
    let parsedUrl;

    try {
        parsedUrl = new URL(imageUrl);
    } catch {
        alert("Please enter a valid image URL.");
        return;
    }

    if (
        parsedUrl.protocol !== "http:" &&
        parsedUrl.protocol !== "https:"
    ) {
        alert("The image URL must use HTTP or HTTPS.");
        return;
    }

    // Create the food card.
    const card = document.createElement("article");
    card.classList.add("food-card");
    card.dataset.rank = rank;

    // Create the food image.
    const image = document.createElement("img");
    image.classList.add("food-image");
    image.src = imageUrl;
    image.alt = foodName;

    // Handle images that fail to load.
    image.addEventListener("error", function () {
        image.removeAttribute("src");
        image.alt = "Image unavailable";
    });

    // Create the food name.
    const title = document.createElement("h3");
    title.textContent = foodName;

    // Create the food description.
    const paragraph = document.createElement("p");
    paragraph.textContent = description;

    // Create the Delete button.
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
        card.remove();
    });

    // Assemble the card.
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(paragraph);
    card.appendChild(deleteButton);

    // Insert the card in ascending rank order.
    let inserted = false;

    for (const existingCard of foodCards.children) {
        const existingRank = Number(existingCard.dataset.rank);

        if (rank < existingRank) {
            foodCards.insertBefore(card, existingCard);
            inserted = true;
            break;
        }
    }

    // If no higher rank was found, add the card at the end.
    if (!inserted) {
        foodCards.appendChild(card);
    }

    // Clear the form after a successful submission.
    foodForm.reset();
});
