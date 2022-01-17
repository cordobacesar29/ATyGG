const baseUrl = 'http://localhost:5000/api/users';

const getAll = () => {
  return fetch(baseUrl).then(res => res.json());
};

const addOne = (body) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(res => res.json());
};

const updateOneUser = (id,body ) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(res => res.json());
};

const deleteOne = id => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export { addOne, deleteOne, getAll, updateOneUser };
