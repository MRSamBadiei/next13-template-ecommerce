export async function getAllPlants() {
  const data = await fetch(`http://localhost:3000/api/data/`, {
    method: "GET",
  });
  return data.json();
}
export async function getPlant(id: string) {
  const data = await fetch(`http://localhost:3000/api/data/${id}`, {
    method: "GET",
  });
  return data.json();
}
