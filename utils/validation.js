// FIXME: the url itself may end with .jpeg, .jpg, .gif, .png but the url may not be an image

const validateImageUrl = (url) => {
  try {
    new URL(url);
    if (url.match(/\.(jpeg|jpg|gif|png)$/) === null) return false;
    return true;
  } catch (error) {
    return false;
  }
};

export { validateImageUrl };
