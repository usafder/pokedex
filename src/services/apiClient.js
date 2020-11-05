const apiClient = {
  get: async (url) => {
    return fetch(url).then(async (response) => {
      const data = await response.json()
      return response.ok ? data : Promise.reject(data);
    });
  },
  // post/put/delete not needed currently
};

export default apiClient;
