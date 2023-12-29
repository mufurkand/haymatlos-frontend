// TODO: proper validation

const isValidUrl = async (url) => {
  try {
    const response = await fetch(url, {
      method: "HEAD", // Make a HEAD request
    });
    return response.status === 200 ? true : false;
  } catch (error) {
    return false;
  }
};

export { isValidUrl };
