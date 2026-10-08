import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PetDetailPage() {
  const { id } = useParams();

  const [pet, setPet] = useState(null);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    adoptionDate: "",
    occupation: "",
    address: "",
    housingType: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/Sstvnnn/fb465b8ff7de37b5020c87a81c9f1dc1/raw/6de268f6dcd437398a2565bf7c83cb39554fa4d9/adOWpt%2520me"
    )
      .then((res) => res.json())
      .then((data) => {
        const selectedPet = data.find(
          (item) => item.id.toString() === id
        );

        setPet(selectedPet);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (form.fullName.length < 3) {
      newErrors.fullName = "Name must be at least 3 characters";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!form.email.includes("@")) {
      newErrors.email = "Email must contain @";
    }

    if (!form.adoptionDate) {
      newErrors.adoptionDate = "Please choose adoption date";
    } else {
      const today = new Date().toISOString().split("T")[0];

      if (form.adoptionDate < today) {
        newErrors.adoptionDate =
          "Adoption date cannot be before today";
      }
    }

    if (!form.occupation) {
      newErrors.occupation = "Occupation is required";
    }

    if (!form.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!form.housingType) {
      newErrors.housingType = "Please select housing type";
    }

    if (!form.terms) {
      newErrors.terms =
        "You must agree to the terms and conditions";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Adoption Application Submitted!");
    }
  };

  if (!pet) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* PET DETAIL */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <img
            src={pet.image}
            alt={pet.name}
            className="w-full h-96 object-cover rounded-lg"
          />

          <h1 className="text-3xl font-bold mt-5 text-gray-900 dark:text-white">
            {pet.name}
          </h1>

          <div className="space-y-2 mt-4 text-gray-700 dark:text-gray-300">
            <p>
              <strong>Type:</strong> {pet.type}
            </p>

            <p>
              <strong>Breed:</strong> {pet.breed}
            </p>

            <p>
              <strong>Age:</strong> {pet.age}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              <span
                className={`font-semibold ${
                  pet.status === "available"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {pet.status}
              </span>
            </p>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Adoption Application
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* FULL NAME */}
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={form.fullName}
                onChange={handleChange}
                className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />

              <p className="text-red-500 text-sm mt-1">
                {errors.fullName}
              </p>
            </div>

            {/* EMAIL */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />

              <p className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            </div>

            {/* DATE */}
            <div>
              <input
                type="datetime-local"
                name="adoptionDate"
                value={form.adoptionDate}
                onChange={handleChange}
                className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />

              <p className="text-red-500 text-sm mt-1">
                {errors.adoptionDate}
              </p>
            </div>

            {/* OCCUPATION */}
            <div>
              <select
                name="occupation"
                value={form.occupation}
                onChange={handleChange}
                className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">
                  Select Occupation
                </option>
                <option value="Student">
                  Student
                </option>
                <option value="Employee">
                  Employee
                </option>
                <option value="Entrepreneur">
                  Entrepreneur
                </option>
                <option value="Other">
                  Other
                </option>
              </select>

              <p className="text-red-500 text-sm mt-1">
                {errors.occupation}
              </p>
            </div>

            {/* RADIO */}
            <div>
              <label className="block mb-2 font-medium text-gray-900 dark:text-white">
                Housing Type
              </label>

              <div className="flex gap-5 text-gray-700 dark:text-gray-300">
                <label>
                  <input
                    type="radio"
                    name="housingType"
                    value="House"
                    onChange={handleChange}
                  />{" "}
                  House
                </label>

                <label>
                  <input
                    type="radio"
                    name="housingType"
                    value="Apartment"
                    onChange={handleChange}
                  />{" "}
                  Apartment
                </label>
              </div>

              <p className="text-red-500 text-sm mt-1">
                {errors.housingType}
              </p>
            </div>

            {/* ADDRESS */}
            <div>
              <textarea
                name="address"
                rows="4"
                placeholder="Your Address"
                value={form.address}
                onChange={handleChange}
                className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />

              <p className="text-red-500 text-sm mt-1">
                {errors.address}
              </p>
            </div>

            {/* TERMS */}
            <div>
              <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <input
                  type="checkbox"
                  name="terms"
                  checked={form.terms}
                  onChange={handleChange}
                />

                I agree to the Terms and Conditions
              </label>

              <p className="text-red-500 text-sm mt-1">
                {errors.terms}
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
            >
              Submit Adoption Request
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default PetDetailPage;