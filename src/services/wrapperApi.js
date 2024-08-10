const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const wrapperApi = async (api) => {
  try {
    const response = await api();
    return response;
  } catch (error) {
    console.log(error);
    if (error.error === "Network Error") {
      await delay(2000);
      return await wrapperApi(api);
    }

    throw error;
  }
};
