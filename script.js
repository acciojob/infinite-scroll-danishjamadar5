//your code here!
document.addEventListener("DOMContentLoaded", function() {
  const infiList = document.getElementById("infi-list");

  // Number of list items to add on each scroll
  const itemsPerScroll = 2;

  // Initial list item count
  let listItemCount = 10;

  // Render initial list items
  renderListItems(listItemCount);

  // Add event listener for scroll event
  infiList.addEventListener("scroll", function() {
    if (isScrolledToEnd()) {
      // Increase list item count
      listItemCount += itemsPerScroll;

      // Render additional list items
      renderListItems(listItemCount);
    }
  });

  // Function to check if the user has scrolled to the end of the list
  function isScrolledToEnd() {
    return infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight;
  }

  // Function to render a specified number of list items
  function renderListItems(count) {
    const fragment = document.createDocumentFragment();

    for (let i = listItemCount - itemsPerScroll; i < count; i++) {
      const li = document.createElement("li");
      li.textContent = "List Item " + (i + 1);
      fragment.appendChild(li);
    }

    infiList.appendChild(fragment);
  }
});

