import React, { useEffect, useState } from "react";

function UserProfile() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetching a random user from Random User API
        const response = await fetch("https://randomuser.me/api/");
        if (!response.ok) throw new Error("Network response was not ok");

        const json = await response.json();
        const user = json.results[0];
        setData(user);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading)
    return <p style={{ textAlign: "center" }}>Loading user data...</p>;
  if (error)
    return <p style={{ textAlign: "center", color: "red" }}>Error: {error}</p>;

  return (
    <div style={{ textAlign: "center" }}>
      <h3>User Profile</h3>
      <img
        src={data.picture.large}
        alt="User"
        style={{ borderRadius: "50%" }}
      />
      <p>
        <strong>Name:</strong> {data.name.first} {data.name.last}
      </p>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
      <p>
        <strong>Country:</strong> {data.location.country}
      </p>
    </div>
  );
}

export default UserProfile;
