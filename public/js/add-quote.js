async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="quote-title"]').value;
  const quote_url = document.querySelector('input[name="quote-url"]').value;

  const response = await fetch(`/api/quotes`, {
    method: "POST",
    body: JSON.stringify({
      title,
      quote_url,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-quote-form")
  .addEventListener("submit", newFormHandler);
