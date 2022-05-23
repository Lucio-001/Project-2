async function newFormHandler(event) {
  event.preventDefault();

  const text = document.querySelector('input[name="quote-title"]').value;
  const quotes_url = document.querySelector('input[name="quote-url"]').value;

  const response = await fetch(`/api/quotes`, {
    method: "POST",
    body: JSON.stringify({
      text: text,
      quotes_url: quotes_url,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/createquote");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-quote-form")
  .addEventListener("submit", newFormHandler);
