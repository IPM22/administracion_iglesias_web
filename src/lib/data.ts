export async function getRegimenes() {
  const token = await getToken();
  fetch(`${process.env.BASE_URL}/utils/cons/regimen`, {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

export async function getToken() {
  fetch(`${process.env.BASE_URL}auth/token/new`)
    .then((res) => res.json)
    .then((data) => {
      return data;
    });
}
