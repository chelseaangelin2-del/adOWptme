import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/Sstvnnn/fb465b8ff7de37b5020c87a81c9f1dc1/raw/6de268f6dcd437398a2565bf7c83cb39554fa4d9/adOWpt%2520me"
    )
      .then((res) => res.json())
      .then((data) => {
        setPets(data);
        setFilteredPets(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let result = pets;

    if (search) {
      result = result.filter((pet) =>
        pet.breed.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (statusFilter !== "all") {
      result = result.filter(
        (pet) => pet.status.toLowerCase() === statusFilter.toLowerCase()
      );
    }

    setFilteredPets(result);
  }, [search, statusFilter, pets]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      
      {/* HERO SECTION */}
      <section className="bg-orange-100 dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Find Your Forever Friend 🐾
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Give a loving home to rescued pets. Browse our adoption catalog
            and meet your future best friend today.
          </p>

          <a
            href="#pets"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Adopt Now
          </a>
        </div>
      </section>

      {/* SEARCH & FILTER */}
      <section id="pets" className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row gap-4 mb-8">

          {/* Search */}
          <input
            type="text"
            placeholder="Search by breed..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg px-4 py-3"
          >
            <option value="all">All Status</option>
            <option value="available">Available</option>
            <option value="adopted">Adopted</option>
          </select>

        </div>

        {/* PET LIST */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPets.map((pet) => (
            <div
              key={pet.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={pet.image}
                alt={pet.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">
                <div className="flex justify-between items-center mb-2">

                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    {pet.name}
                  </h2>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      pet.status === "available"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {pet.status}
                  </span>

                </div>

                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Type:</strong> {pet.type}
                </p>

                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Breed:</strong> {pet.breed}
                </p>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  <strong>Age:</strong> {pet.age}
                </p>

                <Link
                  to={`/pet/${pet.id}`}
                  className="block text-center bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredPets.length === 0 && (
          <div className="text-center py-10">
            <h2 className="text-xl font-semibold text-gray-500 dark:text-gray-400">
              No pets found.
            </h2>
          </div>
        )}
      </section>
    </div>
  );
}

export default HomePage;