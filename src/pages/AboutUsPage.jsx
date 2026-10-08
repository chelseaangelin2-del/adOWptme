import chelsea from "../assets/chelsea-profile-photo.jpeg";

function AboutUsPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Chelsea Angelin",
      role: "Founder",
      image: chelsea,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Veterinarian",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Adoption Specialist",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Animal Care Manager",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

      {/* HERO */}
      <section className="bg-orange-100 dark:bg-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-5">
            About adOWptme
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            adOWptme is a modern animal shelter dedicated to rescuing,
            rehabilitating, and rehoming stray pets. We believe every
            animal deserves a safe environment and a loving family.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Our Story
        </h2>

        <p className="text-gray-600 dark:text-gray-300 text-center leading-8">
          Founded in 2018, adOWptme has helped thousands of rescued
          animals find their forever homes. Our team works tirelessly
          to provide medical care, shelter, and adoption services
          for abandoned pets while educating communities about
          responsible pet ownership.
        </p>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Our Achievements
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-orange-50 dark:bg-gray-700 p-6 rounded-xl text-center">
              <h3 className="text-4xl font-bold text-orange-500">
                2,500+
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Successful Adoptions
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-gray-700 p-6 rounded-xl text-center">
              <h3 className="text-4xl font-bold text-orange-500">
                3,200+
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Animals Rescued
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-gray-700 p-6 rounded-xl text-center">
              <h3 className="text-4xl font-bold text-orange-500">
                150+
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Volunteers
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-gray-700 p-6 rounded-xl text-center">
              <h3 className="text-4xl font-bold text-orange-500">
                8
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Years of Service
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Compassionate Care
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                Every animal receives love, respect,
                medical attention, and proper shelter.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Responsibility
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                We promote responsible pet ownership
                and ethical adoption practices.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Community Impact
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                We work together with local communities
                to improve animal welfare.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* TEAM MEMBER */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Meet The Developer
          </h2>

          <div className="flex justify-center">

            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="w-80 bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover"
                />

                <div className="p-5 text-center">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                    {member.name}
                  </h3>

                  <p className="text-gray-500 dark:text-gray-300">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            Contact Us
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">

            <div className="space-y-4 text-gray-700 dark:text-gray-300">

              <p>📍 Address: Jakarta, Indonesia</p>
              <p>📞 Phone: +62 812-3456-7890</p>
              <p>📧 Email: contact@adowptme.com</p>
              <p>🌐 Website: www.adowptme.com</p>
              <p>🕒 Operating Hours: Monday - Saturday (08:00 - 18:00)</p>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default AboutUsPage;